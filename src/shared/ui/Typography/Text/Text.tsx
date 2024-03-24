import {TextProps, useStyle} from './styles';
import {Text as NativeText} from 'react-native';
import React, { PropsWithChildren } from 'react'


function Text(props: PropsWithChildren<TextProps>) {
  const {size = '3', children, style: parentStyle} = props
    const style = useStyle(props);

  return <NativeText style={{
    ...parentStyle,
    ...style[size],
    ...style.color,

  }}>{children}</NativeText>
}

export {
    Text
}
