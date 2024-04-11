import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { styles, VStackProps } from './styles';

function VStack({ children, ...props }: PropsWithChildren<VStackProps>) {
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
    VStack,
};
