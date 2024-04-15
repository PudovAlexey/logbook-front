import { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { styles as commonStyles } from './styles';

type PageWrapperProps = {
    styles?: any
}

function PageWrapper({ styles, children }: PropsWithChildren<PageWrapperProps>) {
  return (
    <View style={{
        ...commonStyles.wrapper,
    }}
    >
        {children}
    </View>
  );
}

export {
    PageWrapper,
};
