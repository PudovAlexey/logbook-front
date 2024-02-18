import React from 'react'
import {styles} from './styles';
import {View} from 'react-native';
import {Input as RneUiInput, InputProps as RneUiInputProps} from '@rneui/themed';

export type InputProps = RneUiInputProps & {

}

 function Input(props: InputProps) {
    const {style: inStyle, ...otherProps} = props;

  return  <RneUiInput 
  containerStyle={styles.containerStyle}
  inputStyle={styles.inputStyle}
  leftIconContainerStyle={styles.iconContainer}
  rightIconContainerStyle={styles.iconContainer}
  inputContainerStyle={{
    ...styles.inputContainerStyle,
  }} {...otherProps}/>
}

export {
    Input
}
