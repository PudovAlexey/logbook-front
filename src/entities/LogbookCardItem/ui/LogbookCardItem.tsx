import { Button } from '@rneui/base';
import { GetLogbookListReqItem } from '@shared/api/loginfoEndpoints/types';
import { Card } from '@shared/ui/Card/Card';

type LogbookCardItemProps = GetLogbookListReqItem & {
  id: number
  onCardClick: (id: number) => void
}

function LogbookCardItem(props: LogbookCardItemProps) {
    const {
 title, description, onCardClick, id,
} = props;

  return (
    <Button onPress={() => onCardClick(id)} type="clear">
      <Card description={description} title={title} />
    </Button>
  );
}

export {
    LogbookCardItem,
};
