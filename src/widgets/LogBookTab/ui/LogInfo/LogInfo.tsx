import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { HStack } from '@shared/ui/HStack/HStack';
import { SearchField } from '@shared/ui/SearchField/SearchField';
import { VStack } from '@shared/ui/VStack/VStack';
import { useCalendarTriggerState } from '@widgets/CalendarRangeWidget/ui/CalendarRangeProvider';
import { Button } from '@shared/ui/Button/ui/Button';
import { styles } from './styles';

type LogInfoProps = {
  searchValue?: string;
  onSearch?: (value: string) => void;
};

function LogInfo({
 searchValue, onSearch,
}: LogInfoProps) {
  const { setCalendarOpen } = useCalendarTriggerState();
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
        />
      </VStack>
      {/* <Icon size={16} name="arrowdown" /> */}
      <Button onPress={() => setCalendarOpen && setCalendarOpen(true)} type="clear">
      <Icon
        size={16}
        name="clockcircle"
      />
      </Button>
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
