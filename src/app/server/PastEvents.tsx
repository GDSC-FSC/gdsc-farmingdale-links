import { CustomAlert } from '@/src/components/custom';
import { Skeleton } from '@/src/components/ui/skeleton';
import { usePastEventsStore } from '@/src/core/store';
import { fetchData } from '@/src/utils/typeSafeFetch';
import { useQuery } from 'react-query'
import EventsDataContentWrapper from '../ui/DataContentWrapper';

export const PastEvents = () => {
  const { setPastEvents } = usePastEventsStore();
  const { data: event, isLoading, isError } = useQuery('pastEvents', () =>
    fetchData<Events[]>('https://gdsc-api.onrender.com/api/past-events'), {
    onSuccess: (data) => {
      setPastEvents(data);
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
