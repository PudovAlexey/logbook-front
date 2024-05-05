import { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { VStack } from '@shared/ui/VStack/VStack';
import { styles as commonStyles } from './styles';

type PageWrapperProps = {
  styles?: any;
  mode?: 'wide' | 'centered';
};

function PageWrapper({ styles, children, mode = 'wide' }: PropsWithChildren<PageWrapperProps>) {
  return (
    <VStack
      justifyContent="center"
      alignItems={mode === 'wide' ? 'stretch' : 'center'}
      alignSelf={mode === 'wide' ? 'stretch' : 'center'}
      style={{
        ...commonStyles.wrapper,
      }}
    >
      {children}
    </VStack>
  );
}

export { PageWrapper };
