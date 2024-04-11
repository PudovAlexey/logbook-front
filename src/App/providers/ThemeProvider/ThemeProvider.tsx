import {
 Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useMemo, useState,
} from 'react';
import { ThemeProvider as RneuiThemeProvider } from '@rneui/themed';
import { themes } from './themes';

type Theme = 'light' | 'dark'

const defaultTheme: Theme = 'dark';

const ThemeContext = createContext<{theme: Theme, setTheme: Dispatch<SetStateAction<Theme>>}>({
    theme: defaultTheme,
    setTheme: () => {},
});

function ThemeProvider({ children }: PropsWithChildren) {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    return (
        <ThemeContext.Provider value={useMemo(() => ({
            theme,
            setTheme,
        }), [theme])}
        >
            <RneuiThemeProvider theme={themes}>
            {children}
            </RneuiThemeProvider>
        </ThemeContext.Provider>
    );
}

function useThemeState() {
    return useContext(ThemeContext);
}

export {
    ThemeProvider,
    useThemeState,
};
