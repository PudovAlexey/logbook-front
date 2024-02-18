import React from 'react'
import {Text, Card} from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { ScrollView, View, Image } from 'react-native';
import {styles} from './styles';
import { LogInfo } from '../LogInfo/LogInfo';

const users = [
  {
    name: 'brynn',
    avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
  },
  {
    name: 'thot leader',
    avatar:
      'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
  },
  {
    name: 'jsa',
    avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
  },
  {
    name: 'talhaconcepts',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'andy vitale',
    avatar: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg',
  },
  {
    name: 'katy friedson',
    avatar:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
  },
  ];

function LogbookTab() {
    // const {t} = useTranslation();
  return (
    <View style={styles.cardView}>
      <View style={styles.logInfo} >
      <LogInfo/>
      </View>
      <View style={styles.cardWrapper}>
        <View style={styles.card}><Text>1</Text></View>
        <View style={styles.card}><Text>2</Text></View>
        <View style={styles.card}><Text>3</Text></View>
        <View style={styles.card}><Text>4</Text></View>
      </View>
    </View>
  )
}

export {
    LogbookTab   
}
