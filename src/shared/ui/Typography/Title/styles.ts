import {StyleSheet} from 'react-native';
import { makeStyles } from '@rneui/themed';
import { BaseTypographyProps } from '../types';
import useMakeTypographyToken from '@shared/lib/styleHooks/useMakeTypographyToken';

type TitleProps = BaseTypographyProps & {
  size?: '1' | '2' | '3' | '4' | '5' | '6'
  }

const useStyle = (props: TitleProps) => {
  const styles = useMakeTypographyToken(props.color)

  return StyleSheet.create({
    h1: {
      fontWeight: '700',
      fontSize: 64,
      lineHeight: 109,
    },
    h2: {
      fontWeight: '700',
      fontSize: 48,
      lineHeight: 76,
    },
    h3: {
      fontWeight: '700',
      fontSize: 40,
      lineHeight: 64,
    },
    h4: {
      fontWeight: '700',
      fontSize: 32,
      lineHeight: 52,
    },
    h5: {
      fontWeight: '700',
      fontSize: 24,
      lineHeight: 41,
    },
    h6: {
      fontWeight: '700',
      fontSize: 18,
      lineHeight: 32,
    },

    color: {
      color: styles
    }
  })
}

export {
    useStyle
}

export type {
  TitleProps
}
