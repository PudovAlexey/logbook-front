import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { HStack } from '@shared/ui/HStack/HStack';
import { SearchField } from '@shared/ui/SearchField/SearchField';
import { VStack } from '@shared/ui/VStack/VStack';
import { styles } from './styles';

type LogInfoProps = {
  searchValue: string
  onSearch: (value: string) => void

}

function LogInfo({ searchValue, onSearch }: LogInfoProps) {
  return (
    <HStack style={styles.tabWrapper} gap={6} justifyContent="space-between">
      <Icon size={16} name="clockcircle" />
      <VStack flex={1} alignSelf="stretch">
      <SearchField value={searchValue} onChangeText={(e) => onSearch(e)} size="m" />
      </VStack>
      {/* <Icon size={16} name="arrowdown" /> */}
      <Icon size={16} name="clockcircle" />
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

export {
    LogInfo,
};
