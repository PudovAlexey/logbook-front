import {
 View, TextInput, StyleProp, TextInputProps, DimensionValue,
} from 'react-native';
import { BaseSize, BaseTypographyColor } from '@shared/api/types/uiTypes';
import { useStyles } from './styles';
import { LabelComponent } from '../LabelComponent/ui/LabelComponent';
import { LabelComponentProps } from '../LabelComponent/ui/styles';

export type InputProps = TextInputProps & {
  size?: BaseSize;
  inputStyle?: StyleProp<any>;
  wrapperStyle?: StyleProp<any>;
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
  labelProps?: LabelComponentProps;
};

// function sizeIntoLevel(size: InputProps['size']) {
//   switch (size) {
//     case 'xs': return '4';
//     case 's': return '4';
//     case 'm': return '3';
//     case 'l': return '2';
//     case 'xl': return '1';
//     default: return '1';
//   }
// }

function Input(props: InputProps) {
  const {
 style: inStyle, wrapperStyle, size = 'm', addonBefore, addonAfter, labelProps, ...otherProps
} = props;
  const styles = useStyles();

  return (
    <LabelComponent {...labelProps}>
      <View
        style={{
          ...styles.wrapper,
          ...styles[`wrapper${size}`],
          // ...(status ? styles[`wrapper_${status}`] : {}),
          ...wrapperStyle,
        }}
      >
        {addonBefore && (
          <View
            style={{
              ...styles.addon,
              ...styles['addon-left'],
            }}
          >
            {addonBefore}
          </View>
        )}
        <TextInput
          style={{
            ...styles.input,
            ...styles[size],
          }}
          {...otherProps}
        />
        {addonAfter && (
          <View
            style={{
              ...styles.addon,
              ...styles['addon-right'],
            }}
          >
            {addonAfter}
          </View>
        )}
      </View>
    </LabelComponent>
  );
}

export { Input };
