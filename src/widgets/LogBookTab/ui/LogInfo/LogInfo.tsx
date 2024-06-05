import Icon from 'react-native-vector-icons/AntDesign';
import { HStack } from '@shared/ui/HStack/HStack';
import { SearchField } from '@shared/ui/SearchField/SearchField';
import { VStack } from '@shared/ui/VStack/VStack';
import { useCalendarTriggerState } from '@widgets/CalendarRangeWidget/ui/CalendarRangeProvider';
import { Button } from '@shared/ui/Button/ui/Button';
import { styles } from './styles';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

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
      {/* <Icon size={16} name="arrowdown" /> */}
    </HStack>
    // <View style={styles.tabWrapper}>
    //     <View style={styles.topDivesInfo}>
    //    <HStack justifyContent="flex-end" gap={8}>
    //    <HStack width="auto" gap={4}>
    //     <Icon name="clockcircle" size={30} />
    //     <Text>12.06.2024</Text>
    //    </HStack>
    //     <HStack width="auto" gap={4}>
    //     <Icon name="arrowdown" size={30} />
    //     <Text>23 M</Text>
    //     </HStack>
    //    </HStack>
    //     </View>
    //     <View style={styles.mainBox}>
    //     <SearchField />
    //     <View style={styles.circleBox}><Text>Circle</Text></View>
    //     </View>
    // </View>
  );
}

export { LogInfo };
