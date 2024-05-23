import { Button } from '@shared/ui/Button/ui/Button';
import {
 Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useMemo, useState,
} from 'react';
import { Text, View, Dimensions } from 'react-native';
import Calendar from 'react-native-calendar-range-picker';
import { BottomSheet } from '@shared/ui/BottomSheet/ui/BottomSheet';
import { useStyles } from './styles';

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
  const styles = useStyles();
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
      {children}
      <BottomSheet onChangeVisibilityPress={(isOpen) => setCalendarOpen(isOpen)} isVisible={calendarOpen}>
       <View style={{ height: windowWidth / 2 }}>
       <Calendar
          startDate={dates.startDate}
          endDate={dates.endDate}
          onChange={({ startDate, endDate }) => setDates({
              startDate,
              endDate,
            })}
       />
       </View>
      </BottomSheet>
    </CalendarContext.Provider>
  );
}

function useCalendarTriggerState() {
  return useContext(CalendarContext);
}

export { CalendarRangeProvider, useCalendarTriggerState };
