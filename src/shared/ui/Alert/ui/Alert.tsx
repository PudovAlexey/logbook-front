import { Typography } from '@shared/ui/Typography';
import { View } from 'react-native';
import { AlertProps, useStyles } from './styles';

function Alert(props: AlertProps) {
    const styles = useStyles(props)
  return (
    <View style={styles.alert}>
        <Typography.Text level='1'>{props.message}</Typography.Text>
        {props.description && (
            <Typography.Text>{props.description}</Typography.Text>
        )}
    </View>
  )
}

export {
    Alert
}
