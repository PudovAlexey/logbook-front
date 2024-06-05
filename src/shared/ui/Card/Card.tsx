import React from 'react';
import { Text, View, Image } from 'react-native';
import dive from '../../../../assets/dive-placeholder.jpg';
import { useStyle } from './styles';
import { VStack } from '../VStack/VStack';
import { Typography } from '../Typography';

export type CardProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

function Card(props: CardProps) {
  const { title, description, imageUrl } = props;
  const style = useStyle();
  return (
    <VStack
      justifyContent="center"
      style={style.card}
    >
      <View style={style.imageWrapper}>
        <View>
          {/* <Text style={style.image}>Image</Text> */}
          {imageUrl ? (
            <Image
              style={style.image}
              source={{
                uri: imageUrl,
              }}
            />
          ) : (
            <Image
              style={style.image}
              source={dive}
            />
          )}
        </View>
      </View>
      <VStack
        gap={4}
        alignItems="flex-start"
      >
        <Typography.Title size="6">{title}</Typography.Title>
        {/* <Typography.Caption>{description}</Typography.Caption> */}
        <Typography.Caption numberOfLines={2} ellipsizeMode="tail">
        Очень длинное описание Очень длинное описание Очень длинное описание Очень длинное описание Очень длинное описание Очень длинное описание Очень длинное описание
        </Typography.Caption>
        {/* <Text style={style.testFont}>{title}</Text>
        <Text>{description}</Text> */}
        {/* <Text>tools</Text> */}
      </VStack>
    </VStack>
  );
}

export { Card };
