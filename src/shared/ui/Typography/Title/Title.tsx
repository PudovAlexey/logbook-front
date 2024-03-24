import React, { PropsWithChildren } from 'react'
import {Text as RneuiText} from '@rneui/themed';
import { TitleProps, useStyle } from './styles';


function Title(props: PropsWithChildren<TitleProps>) {
  const {size  = 3, style: parentStyle, children} = props;
    const style = useStyle(props);
  return <RneuiText style={{
    ...style[`h${size}`],
    ...parentStyle,
    ...style.color,
  }}>{children}</RneuiText>
}

export {
  Title
}
