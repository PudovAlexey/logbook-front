import { AlertContextProvider } from '@shared/ui/AlertContext/ui/AlertContext';
import { CalendarRangeProvider } from '@widgets/CalendarRangeWidget/ui/CalendarRangeProvider';
import { LoggerProvider } from '@shared/ui/LoggerProvider/LoggerProvider';
import { LanguageProvider } from './providers/LanguageProvider/LanguageProvider';
import { QueryClientProvider } from './providers/QueryClientProvider/QueryClientProvider';
import { ThemeProvider } from './providers/ThemeProvider/ThemeProvider';
import { FontProvider } from './providers/FontProvider/FontProvider';
import { UserProvider } from './providers/UserProvider/ui/UserProvider';
import { NavigationProvider } from './providers/NavigationProvider/NavigationProvider';

function App() {
  return (
   <LoggerProvider>
     <UserProvider>
      <NavigationProvider
        // eslint-disable-next-line react/no-unstable-nested-components
        navigateRenderProps={(navigation) => (
          <QueryClientProvider>
            <LanguageProvider>
              <ThemeProvider>
                <FontProvider>
                  <AlertContextProvider>
                    <CalendarRangeProvider>{navigation}</CalendarRangeProvider>
                  </AlertContextProvider>
                </FontProvider>
              </ThemeProvider>
            </LanguageProvider>
          </QueryClientProvider>
        )}
      />
     </UserProvider>
   </LoggerProvider>
  );
}

export { App };
