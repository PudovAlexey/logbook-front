import React from 'react';
import { Text, View } from 'react-native';
import { useStyle } from './styles';
import { VStack } from '../VStack/VStack';

export type CardProps = {
    title: string
    description: string

}

function Card() {
  const style = useStyle();
  return (
    <VStack justifyContent="center" style={style.card}>
      <View style={style.imageWrapper}>
        <View>
        <Text style={style.image}>Image</Text>
        </View>
      </View>
      <VStack gap={4} alignItems="flex-start">
        <Text style={style.testFont}>MY CUSTOM TITLE</Text>
        <Text>My custom description My custom description My custom description My custom description</Text>
        <Text>tools</Text>
      </VStack>
    </VStack>
  );
}

export { Card };
