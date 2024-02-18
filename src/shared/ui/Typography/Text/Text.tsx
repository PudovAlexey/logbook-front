import React, { PropsWithChildren } from 'react'
import {Text as RneuiText} from '@rneui/themed';
import { useStyle } from './styles';

type TitleProps = {
level?: '1' | '2' | '3' | '4'
}


function Text({level = '3', children}: PropsWithChildren<TitleProps>) {
    const style = useStyle();
  return <RneuiText style={style[level]}>{children}</RneuiText>
}

export {
    Text
}
