import { Colors } from '@rneui/base';
import { useTheme } from '@rneui/themed';
import { StyleSheet } from 'react-native';

type AlertProps = {
  status: 'error' | 'success' | 'warning';
  message: string;
  description?: string;
};

function transformStatusIntoColor(status: AlertProps['status'], colors: Colors) {
  switch (status) {
    case 'success':
      return {
        backgroundColor: colors.colorSuccess(0.5),
        border: `1px solid ${colors.colorSuccessBorder()}`,
      };
    case 'warning':
      return {
        backgroundColor: colors.colorWarning(0.5),
        border: `1px solid ${colors.colorWarningBorder()}`,
      };
    case 'error':
      return {
        backgroundColor: colors.colorError(0.5),
        border: `1px solid ${colors.colorErrorBorder()}`,
      };
    default:
      return {};
  }
}

const useStyles = (props: AlertProps) => {
  const { theme } = useTheme();

  return StyleSheet.create({
    alert: {
      width: '100%',
      borderRadius: 12,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 8,
      paddingBottom: 8,
      ...transformStatusIntoColor(props.status, theme.colors),
    },
  });
};

export { useStyles };

export type { AlertProps };
