import { Button } from '@shared/ui/Button/ui/Button';
import {
 Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useMemo, useRef, useState,
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
  onChange: (value: DateRange) => void
  setDates: Dispatch<SetStateAction<DateRange>>;
  onCalendarClose: (value: (value: DateRange) => void) => void
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

  // const [selectedDates, setSelectedDates] = useState<DateRange>({
  //   startDate: undefined,
  //   endDate: undefined,
  // });

  // 2024-03-12

  // const onChange = (dateRange: DateRange) => {

  // }

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
        <Button onPress={() => {
              setCalendarOpen(false);
          setDates({
            startDate: '',
            endDate: '',
          });
}}
        >
remove
        </Button>
       <Calendar
          startDate={dates.startDate}
          endDate={dates.endDate}
          onChange={({ startDate, endDate }) => {
            if (startDate && endDate) {
              const start = new Date(startDate).toISOString().replace('Z', '');
              const end = new Date(endDate).toISOString().replace('Z', '');
            setDates({
              startDate: start,
              endDate: end,
            });
            setCalendarOpen(false);
          }
          }}
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
