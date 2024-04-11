import { Text } from 'react-native';
import { PropsWithChildren } from 'react';
import { useStyles, ButtonTypographyProps } from './styles';

function Button(props: PropsWithChildren<ButtonTypographyProps>) {
    const { size, style } = props;
    const styles = useStyles(props);
  return (
    <Text style={{
        ...styles[size],
        ...styles.color,
        ...style,
    }}
    >
{props.children}
    </Text>
  );
}

export {
     Button,
};
