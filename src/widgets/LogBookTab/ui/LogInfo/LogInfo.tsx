import Icon from 'react-native-vector-icons/AntDesign';
import { HStack } from '@shared/ui/HStack/HStack';
import { SearchField } from '@shared/ui/SearchField/SearchField';
import { VStack } from '@shared/ui/VStack/VStack';
import { useCalendarTriggerState } from '@widgets/CalendarRangeWidget/ui/CalendarRangeProvider';
import { Button } from '@shared/ui/Button/ui/Button';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { styles } from './styles';

type LogInfoProps = {
  searchValue?: string;
  onSearch?: (value: string) => void;
  navigator: NativeStackHeaderProps
};

function LogInfo({
  searchValue, onSearch, navigator,
}: LogInfoProps) {
  const { setCalendarOpen } = useCalendarTriggerState();

  function onMoveToNewLog() {
    navigator.navigation.push('logbookPage');
  }

  return (
    <HStack
      style={styles.tabWrapper}
      gap={6}
      justifyContent="space-between"
      alignItems="center"
    >
      {/* <Icon
        size={16}
        name="clockcircle"
      /> */}
      <VStack
        flex={1}
        alignSelf="stretch"
      >
        <SearchField
          value={searchValue}
          onChangeText={(e) => onSearch && onSearch(e)}
          size="m"
          addonBefore={(
              <Button onPress={() => setCalendarOpen && setCalendarOpen(true)} type="clear">
                <Icon
                  size={16}
                  name="clockcircle"
                />
              </Button>
          )}
          addonAfter={(
            <Button onPress={() => onMoveToNewLog()} type="clear">
            <Icon
              size={16}
              name="plus"
            />
            </Button>
          )}
        />
      </VStack>
    </HStack>
  );
}

export { LogInfo };
