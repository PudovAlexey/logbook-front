import { loginfoEndpoints } from '@shared/api/loginfoEndpoints/loginfoEndpoints';
import { GetLogbookListReqItem } from '@shared/api/loginfoEndpoints/types';
import { useLazyQuery } from '@shared/lib/queryHooks/useLazyQuery';
import { DateRange, useCalendarTriggerState } from '@widgets/CalendarRangeWidget/ui/CalendarRangeProvider';
import { useEffect, useState } from 'react';

function useLogsLoader() {
    const [page, setPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const { dates } = useCalendarTriggerState();
    const [logsList, setLogsList] = useState<GetLogbookListReqItem[]>([]);
    const logbookQuery = useLazyQuery(loginfoEndpoints.getLogInfoList);

    useEffect(() => {
        logbookQuery({
          startDate: dates?.startDate,
          endDate: dates?.endDate,
          searchQuery: searchValue,
          pageSize: 100,
          page,
        })
        .then(({ data }) => {
            setLogsList(data);
        });
    }, [logbookQuery, dates, page, searchValue]);

  return {
    logsList,
    searchValue,
    setSearchValue,
  };
}

export {
    useLogsLoader,
};
