import { PropsWithChildren } from 'react';
import { Button as RenuiButton, ButtonProps as RenuiButtonPros } from '@rneui/themed';

type ButtonProps = RenuiButtonPros & {

}

function Button({ children, ...pros }: PropsWithChildren<ButtonProps>) {
  return (
    <RenuiButton
    {...pros}
    >
{children}
    </RenuiButton>
  );
}

export {
    Button,
};
