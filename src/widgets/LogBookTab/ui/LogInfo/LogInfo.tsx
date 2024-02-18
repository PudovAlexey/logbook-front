import React from 'react'
import {View} from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { HStack } from '@shared/ui/HStack/HStack';
import {Text} from '@rneui/themed';
import { Input } from '@shared/ui/Input/Input';

function LogInfo() {
  return (
    <View style={styles.tabWrapper}>
        <View style={styles.topDivesInfo}>
       <HStack justifyContent="flex-end" gap={8}>
       <HStack width='auto' gap={4}>
        <Icon name="clockcircle" size={30} />
        <Text>12.06.2024</Text>
        </HStack>
        <HStack width='auto' gap={4}>
        <Icon name="arrowdown" size={30} />
        <Text>23 M</Text>
        </HStack>
       </HStack>
        </View>
        <View style={styles.mainBox}>
        <Input/>
        <View style={styles.circleBox}><Text>Circle</Text></View>
        </View>
    </View>
  )
}

export {
    LogInfo
}
