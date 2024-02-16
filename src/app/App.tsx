import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ContentCard from './components/ContentCard';
import { ImageCarousel, VideoCarousel } from './components/index';
import { useCarousel } from '../components/providers';
const queryClient = new QueryClient();

export const Component =  function App() {
  const { mediaType } = useCarousel();
  return (
      <QueryClientProvider client={queryClient}>
          <ContentCard />
          {mediaType === 'image' ? (
            <ImageCarousel />
          ) : (
            <VideoCarousel />
          )}
      </QueryClientProvider>
  )
}
