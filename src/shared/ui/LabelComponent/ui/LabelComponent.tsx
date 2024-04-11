import { View } from 'react-native';
import { PropsWithChildren } from 'react';
import { Typography } from '@shared/ui/Typography';
import { VStack } from '@shared/ui/VStack/VStack';
import { LabelComponentProps, useStyles } from './styles';

function LabelComponent(props: PropsWithChildren<LabelComponentProps>) {
  const {
 label, required, children, validationText, status,
} = props;

  const styles = useStyles(props);
  return (
    <View style={styles.root}>
      <VStack alignItems="flex-start" gap={6}>
      {label && (
        <Typography.Text>
          {label}
          {required && <Typography.Caption color="error">*</Typography.Caption>}
        </Typography.Text>
      )}
      {children}
      </VStack>
      {validationText && <Typography.Caption style={styles.caption} color={status}>{validationText}</Typography.Caption>}
    </View>
  );
}

export {
    LabelComponent,
};
