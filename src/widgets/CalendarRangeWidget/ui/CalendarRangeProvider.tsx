import { BottomSheet } from '@rneui/base';
import { Button } from '@shared/ui/Button/ui/Button';
import {
 Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useMemo, useState,
} from 'react';
import { Text, View, Dimensions } from 'react-native';
import Calendar from 'react-native-calendar-range-picker';

export type DateRange = {
  startDate?: string;
  endDate?: string;
};

type CalendarContextValue = {
  calendarOpen: boolean;
  setCalendarOpen: Dispatch<SetStateAction<boolean>>;
  dates: DateRange;
  setDates: Dispatch<SetStateAction<DateRange>>;
};

const CalendarContext = createContext<Partial<CalendarContextValue>>({});

function CalendarRangeProvider({ children }: PropsWithChildren) {
  const windowWidth = Dimensions.get('window').height;
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [dates, setDates] = useState<DateRange>({
    startDate: undefined,
    endDate: undefined,
  });

  // 2024-03-12

  return (
    <CalendarContext.Provider
      value={useMemo(
        () => ({
          calendarOpen,
          setCalendarOpen,
          dates,
          setDates,
        }),
        [calendarOpen, dates],
      )}
    >
      {calendarOpen ? (
        <View>
          <View style={{ height: windowWidth - 5 }}>
            <Calendar
              startDate={dates.startDate}
              endDate={dates.endDate}
              onChange={({ startDate, endDate }) => setDates({
                  startDate,
                  endDate,
                })}
            />
          </View>
          <Button onPress={() => setCalendarOpen(false)}>Закрыть</Button>
        </View>
      ) : (
        children
      )}
      {/* {calendarOpen ? (
    ) : children} */}
    </CalendarContext.Provider>
  );
}

function useCalendarTriggerState() {
  return useContext(CalendarContext);
}

export { CalendarRangeProvider, useCalendarTriggerState };
