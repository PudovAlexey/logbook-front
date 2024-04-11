import { PropsWithChildren } from 'react';
import {
    QueryClient,
    QueryClientProvider as TanstackQueryClient,
  } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

 function QueryClientProvider({ children }: PropsWithChildren) {
  return (
    <TanstackQueryClient client={queryClient}>
        {children}
    </TanstackQueryClient>
  );
}

export {
    QueryClientProvider,
};
