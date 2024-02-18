import React, { PropsWithChildren } from 'react'
import {Text as RneuiText} from '@rneui/themed';
import { useStyle } from './styles';

type TitleProps = {
level?: '1' | '2' | '3' | '4' | '5' | '6'
}


function Title({level = '3', children}: PropsWithChildren<TitleProps>) {
    const style = useStyle();
  return <RneuiText style={style[`h${level}`]}>{children}</RneuiText>
}

export {
  Title
}
