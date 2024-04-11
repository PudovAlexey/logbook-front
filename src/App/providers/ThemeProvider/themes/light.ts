import { Colors } from '@rneui/base';
import { RecursivePartial } from '@rneui/themed/dist/config/theme';

const light: RecursivePartial<Colors> = {
    colorError: (a: number | undefined = 1) => `rgba(234, 41, 41, ${a})`,
    colorErrorText: (a: number | undefined = 1) => `rgba(234, 41, 41, ${a})`,
    colorErrorBorder: (a: number | undefined = 1) => `rgba(234, 41, 41, ${a})`,
    colorErrorActive: (a: number | undefined = 1) => `rgba(196, 45, 45, ${a})`,
    colorErrorTextActive: (a: number | undefined = 1) => `rgba(196, 45, 45, ${a})`,
    colorErrorTextHover: (a: number | undefined = 1) => `rgba(248, 68, 68, ${a})`,
    colorErrorHover: (a: number | undefined = 1) => `rgba(248, 68, 68, ${a})`,
    colorErrorBorderHover: (a: number | undefined = 1) => `rgba(248, 68, 68, ${a})`,
    colorWarning: (a: number | undefined = 1) => `rgba(242, 133, 0, ${a})`,
    colorWarningText: (a: number | undefined = 1) => `rgba(242, 133, 0, ${a})`,
    colorWarningBorder: (a: number | undefined = 1) => `rgba(242, 133, 0, ${a})`,
    colorWarningTextActive: (a: number | undefined = 1) => `rgba(222, 122, 0, ${a})`,
    colorWarningActive: (a: number | undefined = 1) => `rgba(222, 122, 0, ${a})`,
    colorWarningBorderHover: (a: number | undefined = 1) => `rgba(255, 166, 56, ${a})`,
    colorWarningHover: (a: number | undefined = 1) => `rgba(255, 166, 56, ${a})`,
    colorWarningTextHover: (a: number | undefined = 1) => `rgba(255, 166, 56, ${a})`,
    colorSuccess: (a: number | undefined = 1) => `rgba(45, 196, 98, ${a})`,
    colorSuccessText: (a: number | undefined = 1) => `rgba(45, 196, 98, ${a})`,
    colorSuccessBorder: (a: number | undefined = 1) => `rgba(45, 196, 98, ${a})`,
    colorSuccessBgHover: (a: number | undefined = 1) => `rgba(181, 252, 206, ${a})`,
    colorSuccessBorderHover: (a: number | undefined = 1) => `rgba(41, 234, 109, ${a})`,
    colorSuccessHover: (a: number | undefined = 1) => `rgba(41, 234, 109, ${a})`,
    colorSuccessTextHover: (a: number | undefined = 1) => `rgba(41, 234, 109, ${a})`,
    colorSuccessTextActive: (a: number | undefined = 1) => `rgba(44, 158, 84, ${a})`,
    colorSuccessActive: (a: number | undefined = 1) => `rgba(44, 158, 84, ${a})`,

    colorBorder: (a: number | undefined = 1) => `rgba(229, 232, 235, ${a})`,
    colorText: (a: number | undefined = 1) => `rgba(6, 7, 8, ${a})`,
};

export {
    light,
};
