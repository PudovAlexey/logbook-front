import React from 'react'
import {Text} from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { ScrollView, View, Image } from 'react-native';
import {styles} from './styles';
import { LogInfo } from '../LogInfo/LogInfo';
import { Card } from '@shared/ui/Card/Card';

function LogbookTab() {
    // const {t} = useTranslation();
  return (
    <View style={styles.cardView}>
      <View style={styles.logInfo} >
      <LogInfo/>
      </View>
      <View style={styles.cardWrapper}>
        {/* <View style={styles.card}><Text>1</Text></View>
        <View style={styles.card}><Text>2</Text></View>
        <View style={styles.card}><Text>3</Text></View>
        <View style={styles.card}><Text>4</Text></View> */}
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </View>
    </View>
  )
}

export {
    LogbookTab   
}
