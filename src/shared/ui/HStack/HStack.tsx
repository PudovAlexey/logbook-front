import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { styles, HStackProps } from './styles';

function HStack({ children, ...props }: PropsWithChildren<HStackProps>) {
    const elementStyles = styles(props);
  return (
    <View style={{
        ...elementStyles.style,
        ...(props.style),
    }}
    >
        {children}
    </View>
  );
}

export {
    HStack,
};
