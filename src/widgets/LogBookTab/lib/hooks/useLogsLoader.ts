import { loginfoEndpoints } from '@shared/api/loginfoEndpoints/loginfoEndpoints';
import { GetLogbookListReqItem } from '@shared/api/loginfoEndpoints/types';
import { useLazyQuery } from '@shared/lib/queryHooks/useLazyQuery';
import { useEffect, useState } from 'react';

function useLogsLoader() {
    const [searchValue, setSearchValue] = useState('');
    const [logsList, setLogsList] = useState<GetLogbookListReqItem[]>([]);
    const logbookQuery = useLazyQuery(loginfoEndpoints.getLogInfoList);

    useEffect(() => {
        logbookQuery({})
        .then(({ data }) => {
            setLogsList(data);
        });
    }, [logbookQuery]);

  return {
    logsList,
    searchValue,
    setSearchValue,
  };
}

export {
    useLogsLoader,
};
