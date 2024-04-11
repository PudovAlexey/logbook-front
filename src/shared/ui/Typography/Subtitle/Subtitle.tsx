import { Text } from 'react-native';

import { PropsWithChildren } from 'react';
import { useStyles, SubtitleProps } from './styles';

function Subtitle(props: PropsWithChildren<SubtitleProps>) {
    const styles = useStyles(props);
  return (
    <Text style={{
        ...styles[props.size],
        ...styles.color,
        ...props.style,
    }}
    >
{props.children}
    </Text>
  );
}

export {
    Subtitle,
};
