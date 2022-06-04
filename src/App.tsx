import { RouteList } from './RouteList';
import { QueryClient, QueryClientProvider } from 'react-query';

export const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouteList />
    </QueryClientProvider>
  );
};
