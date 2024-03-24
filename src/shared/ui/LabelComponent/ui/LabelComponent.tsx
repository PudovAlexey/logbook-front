import {View} from 'react-native'
import { LabelComponentProps, useStyles } from './styles'
import { PropsWithChildren } from 'react'
import { Typography } from '@shared/ui/Typography'
import { VStack } from '@shared/ui/VStack/VStack';

function LabelComponent(props: PropsWithChildren<LabelComponentProps>) {
  const {label, required, children, validationText, status} = props;

  console.log(validationText, 'test');
  const styles = useStyles(props)
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
  )
}

export {
    LabelComponent
}
