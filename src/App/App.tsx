import { LanguageProvider } from './providers/LanguageProvider/LanguageProvider';
import { QueryClientProvider } from './providers/QueryClientProvider/QueryClientProvider';
import { ThemeProvider } from './providers/ThemeProvider/ThemeProvider';
import { FontProvider } from './providers/FontProvider/FontProvider';
import { UserProvider } from './providers/UserProvider/ui/UserProvider';
import { NavigationProvider } from './providers/NavigationProvider/NavigationProvider';
import { AlertContextProvider } from '@shared/ui/AlertContext/ui/AlertContext';

function App() {
  return (
    <NavigationProvider
      navigateRenderProps={(navigation) => (
        <QueryClientProvider>
          <LanguageProvider>
            <ThemeProvider>
              <FontProvider>
                <AlertContextProvider>
                  <UserProvider>{navigation}</UserProvider>
                </AlertContextProvider>
              </FontProvider>
            </ThemeProvider>
          </LanguageProvider>
        </QueryClientProvider>
      )}
    />
  );
}

export { App };
