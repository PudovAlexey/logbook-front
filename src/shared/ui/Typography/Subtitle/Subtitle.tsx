import { Text } from 'react-native';

import {useStyles, SubtitleProps} from './styles';
import { PropsWithChildren } from 'react';

function Subtitle(props: PropsWithChildren<SubtitleProps>) {

    const styles = useStyles(props);
  return (
    <Text style={{
        ...styles[props.size],
        ...styles.color,
        ...props['style'],
    }}>{props.children}</Text>
  )
}

export {
    Subtitle
}
