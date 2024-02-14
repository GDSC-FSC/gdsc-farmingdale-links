import { QueryClient, QueryClientProvider } from 'react-query';
import ContentCard from './components/ContentCard';

const queryClient = new QueryClient();
export const  App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ContentCard />
    </QueryClientProvider>
  )
}
