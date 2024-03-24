import { PropsWithChildren } from 'react';
import {Text} from 'react-native';
import { CaptionProps, useStyles } from './styles';
import cn from 'react-native-classnames';

function Caption({children, style, ...props}:PropsWithChildren<CaptionProps>) {
    const {level = '2'} = props;
    const styles = useStyles(props);

    // const megredStyles = cn(styles[props.level], styles.color)
  return (
    <Text style={{
        ...styles[level],
        ...styles.color,
        ...style
    }}>{children}</Text>
  )
}

export {
    Caption
}
