import { GetLogbookListReqItem } from '@shared/api/loginfoEndpoints/types';
import { Card } from '@shared/ui/Card/Card';

function LogbookCardItem(props: GetLogbookListReqItem) {
    const { title, description } = props;
  return <Card title={title} />;
}

export {
    LogbookCardItem,
};
