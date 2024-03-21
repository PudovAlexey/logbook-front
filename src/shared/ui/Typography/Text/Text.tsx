import cn from 'react-native-classnames';
import React, { PropsWithChildren } from 'react'
import {Text as RneuiText, TextProps} from '@rneui/themed';
import { useStyle } from './styles';

type TitleProps = TextProps & {
level?: '1' | '2' | '3' | '4'
}


function Text({level = '3', children, style: parentStyle, ...props}: PropsWithChildren<TitleProps>) {
    const style = useStyle();
    // const measureStyle = {...style};

  return <RneuiText {...props} style={parentStyle}>{children}</RneuiText>
}

export {
    Text
}
