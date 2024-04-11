import { useTheme } from '@rneui/themed';
import { BaseTypographyColor } from '@shared/api/types/uiTypes';

function useMakeTypographyToken(token?: BaseTypographyColor) {
    const { theme } = useTheme();

  switch (token) {
    case 'warning': return theme.colors.colorWarningText();
    case 'success': return theme.colors.colorSuccessText();
    case 'error': return theme.colors.colorErrorText();
    default: theme.colors.colorText();
  }

  return null;
}

export {
  useMakeTypographyToken,
};
