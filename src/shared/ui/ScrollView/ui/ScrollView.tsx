import { PropsWithChildren } from 'react';
import { ScrollView as NativeScrollView, ScrollViewProps as NativeScrollViewProps, View } from 'react-native';

type ScrollViewProps = NativeScrollViewProps & {};

function ScrollView({ children }: PropsWithChildren<ScrollViewProps>) {
  return (
    <NativeScrollView
style={{
        //   flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          width: 340,
        }}
       horizontal
    >
        {children}
    </NativeScrollView>
  );
}

export { ScrollView };
