import { color } from '@rneui/base';
import { loginfoEndpoints } from '@shared/api/loginfoEndpoints/loginfoEndpoints';
import { GetLogbookListReqItem } from '@shared/api/loginfoEndpoints/types';
import { useLazyQuery } from '@shared/lib/queryHooks/useLazyQuery';
import { useLogger } from '@shared/ui/LoggerProvider/LoggerProvider';
import { DateRange, useCalendarTriggerState } from '@widgets/CalendarRangeWidget/ui/CalendarRangeProvider';
import { useEffect, useState } from 'react';

// 2024-05-1T14:50:17.770Z

function useLogsLoader() {
  const [dates, setDates] = useState<DateRange>({
    startDate: undefined,
    endDate: undefined,
  });
    const [page, setPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const { dates: calendarDates, calendarOpen } = useCalendarTriggerState();
    const [logsList, setLogsList] = useState<GetLogbookListReqItem[]>([]);
    const logbookQuery = useLazyQuery(loginfoEndpoints.getLogInfoList);

    // useEffect(() => {
    //   if (!calendarOpen && calendarDates) {
    //     setDates(calendarDates);
    //   }
    // }, [calendarOpen, calendarDates]);

    // useEffect(() => {
    //   loggerPush({
    //     data: `start date ${dates.startDate} end date ${dates.endDate}`,
    //     color: 'info',
    //   });
    // }, [dates, loggerPush]);

    useEffect(() => {
        logbookQuery({
          startDate: calendarDates?.startDate,
          endDate: calendarDates?.endDate,
          searchQuery: searchValue,
          pageSize: 100,
          page,
        })
        .then(({ data }) => {
            setLogsList(data);
        });
    }, [logbookQuery, dates, page, searchValue, calendarDates]);

  return {
    logsList,
    searchValue,
    setSearchValue,
  };
}

export {
    useLogsLoader,
};
