import {
 View, TextInput, StyleProp, TextInputProps,
} from 'react-native';
import { BaseSize, BaseTypographyColor } from '@shared/api/types/uiTypes';
import { useStyles } from './styles';
import { LabelComponent } from '../LabelComponent/ui/LabelComponent';

export type InputProps = TextInputProps & {
  size?: BaseSize;
  inputStyle?: StyleProp<any>;
  wrapperStyle?: StyleProp<any>;
  label?: string;
  status?: BaseTypographyColor;
  validationText?: string;
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
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
    style: inStyle,
    label,
    wrapperStyle,
    status,
    size = 'm',
    addonBefore,
    addonAfter,
    validationText,
    ...otherProps
  } = props;
  const styles = useStyles();

  return (
    <LabelComponent
      status={status}
      validationText={validationText}
      label={label}
    >
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
