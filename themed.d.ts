import '@rneui/themed';

declare module '@rneui/themed' {
  export interface Colors {
    // accepted
    colorError: (a?: number) => string
    colorErrorText: (a?: number) => string
    colorErrorBorder: (a?: number) => string
    colorErrorActive: (a?: number) => string
    colorErrorTextActive: (a?: number) => string
    colorErrorTextHover: (a?: number) => string
    colorErrorHover: (a?: number) => string
    colorErrorBorderHover: (a?: number) => string
    colorWarning: (a?: number) => string
    colorWarningText: (a?: number) => string
    colorWarningBorder: (a?: number) => string
    colorWarningActive: (a?: number) => string
  colorWarningTextActive: (a?: number) => string
    colorWarningTextHover: (a?: number) => string
    colorWarningHover: (a?: number) => string
    colorWarningBorderHover: (a?: number) => string
    colorSuccess: (a?: number) => string
    colorSuccessText: (a?: number) => string
    colorSuccessBorder: (a?: number) => string
    colorSuccessActive: (a?: number) => string
    colorSuccessTextActive: (a?: number) => string
    colorSuccessTextHover: (a?: number) => string
    colorSuccessHover: (a?: number) => string
    colorSuccessBorderHover: (a?: number) => string
    colorSuccessBgHover: (a?: number) => string
    colorText: (a?: number) => string

    colorBorder: (a?: number) => string
    //
    tertiary: string;
    accent: string;
    btnPrimary: string
    surface: string;
  }
}