import { PropsWithChildren } from 'react';
import { Button as RenuiButton, ButtonProps as RenuiButtonPros } from '@rneui/themed';
import { BaseSize } from '@shared/api/types/uiTypes';
import { styles } from './styles';

type ButtonProps = Omit<RenuiButtonPros, 'size'> & {
  shape?: 'square' | 'circle' | 'defauld'
  size?: BaseSize
}

function Button(props: PropsWithChildren<ButtonProps>) {
  const {
 children, shape = 'defauld', style, size = 'm', ...pros
} = props;
  return (
    <RenuiButton
    {...pros}
    containerStyle={{
      width: '100%',
    }}
    style={{
      ...styles[`${shape}-${size}`],
      ...style,
    }}
    >
{children}
    </RenuiButton>
  );
}

export {
    Button,
};
