import { CustomAlert } from '@/src/components/custom';
import { useUpcomingEventsStore } from '@/src/core/store';
import { fetchData } from '@/src/utils/typeSafeFetch';
import { Skeleton } from '@nextui-org/react';
import { useQuery } from 'react-query'
import EventsDataContentWrapper from '../ui/DataContentWrapper';

export const UpcomingEvents = () => {
  const { setUpcomingEvents } = useUpcomingEventsStore();
  const { data: event, isLoading, isError } = useQuery('upcomingEvents', () =>
    fetchData<Events[]>('https://gdsc-api.onrender.com/api/upcoming-events'), {
    onSuccess: (data) => {
      setUpcomingEvents(data);
    }
  });

  if (isLoading) return (
    <>
      {[1, 2, 3, 4, 5].map((index) => (
        <Skeleton key={index} className={``} />
      ))}
    </>
  );

  if (isError) return (
    <>
      <CustomAlert
        title={`

        `}
        description={`

        `}
        variant={`destructive`}
      />
    </>
  );

  return (
    <>
      {event?.map((events, index) => (
        <EventsDataContentWrapper {...events} key={index} />
      ))}
    </>
  )
}
