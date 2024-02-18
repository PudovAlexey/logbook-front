import React from 'react'
import {styles} from './styles';
import {Input as RneUiInput, InputProps as RneUiInputProps} from '@rneui/themed';

export type InputProps = RneUiInputProps & {

}

 function Input(props: InputProps) {
    const {style: inStyle, ...otherProps} = props;

  return <RneUiInput style={{
    ...styles.style,
  }} {...otherProps}/>
}

export {
    Input
}
