import { QueryClient, QueryClientProvider } from 'react-query';
import { RouteList } from './RouteList';
import { AppProvider } from './hooks/context';

export const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RouteList />
      </AppProvider>
    </QueryClientProvider>
  );
};
