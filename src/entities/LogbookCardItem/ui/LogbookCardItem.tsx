import { Button } from '@rneui/base';
import { GetLogbookListReqItem } from '@shared/api/loginfoEndpoints/types';
import { Card } from '@shared/ui/Card/Card';

type LogbookCardItemProps = GetLogbookListReqItem & {
  id: number;
  onCardClick: (id: number) => void;
};

function LogbookCardItem(props: LogbookCardItemProps) {
  const {
 title, description, onCardClick, id, image_data,
} = props;

  return (
    <Button
      onPress={() => onCardClick(id)}
      type="clear"
    >
      <Card
        description={description}
        title={title}
        imageUrl={image_data?.path && `${process.env.API_URL}${image_data?.path}`}
      />
    </Button>
  );
}

export { LogbookCardItem };
