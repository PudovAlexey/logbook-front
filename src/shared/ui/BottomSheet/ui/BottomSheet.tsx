import { BottomSheet as RnuiBottomSheet, BottomSheetProps as RnuiBottomSheetProps } from '@rneui/base';
import { Button } from '@shared/ui/Button/ui/Button';
import { PropsWithChildren, useEffect, useState } from 'react';
import { View } from 'react-native';
import { useStyles } from './styles';

type BottomSheetProps = RnuiBottomSheetProps & {
  closeButton?: React.ReactNode;
  onChangeVisibilityPress?: (newValue: boolean) => void;
};

function BottomSheet({
  children,
  isVisible: initialVisible,
  onChangeVisibilityPress,
  ...props
}: PropsWithChildren<BottomSheetProps>) {
  const styles = useStyles();
  const { closeButton = true, ...otherProps } = props;
  const [isVisible, setIsVisible] = useState(false);

  const hangleChangeVisibility = () => {
    if (typeof initialVisible === 'undefined') {
      setIsVisible(false);
    } else if (onChangeVisibilityPress) {
      onChangeVisibilityPress(!isVisible);
    }
  };

  useEffect(() => {
    setIsVisible(!!initialVisible);
  }, [initialVisible]);

  return (
    <RnuiBottomSheet
      isVisible={isVisible}
      {...otherProps}
    >
      <View>
        <View style={styles.bottomSheetButtonWrapper}>
          <Button
            onPress={() => hangleChangeVisibility}
            type="clear"
          >
            <View style={styles.boottomSheetWrapper} />
          </Button>
        </View>
        {children}
        {closeButton && <Button onPress={hangleChangeVisibility}>Закрыть</Button>}
        {/* <Button onPress={() => setCalendarOpen(false)}>Закрыть</Button> */}
      </View>
    </RnuiBottomSheet>
  );
}

export { BottomSheet };
