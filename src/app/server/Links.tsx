import { useQuery } from 'react-query'
import { useLinksStore } from '@/src/core/store'
import { Skeleton } from '@/src/components/ui/skeleton'
import { CustomAlert } from '@/src/components/custom/core/index'
import LinksContentWrapper from '../ui/LinksContentWrapper'
import { fetchData } from '@/src/utils/typeSafeFetch'
export const Links = function Links() {
  const { setLinks } = useLinksStore();
  const { data: links, isLoading, isError } = useQuery('links', () => fetchData<Links[]>(`${import.meta.env.VITE_LINKS_API_URL}/api/links`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_LINKS_API_BEARER_TOKEN}`,
      'API-Key': import.meta.env.VITE_LINKS_API_KEY
    }
  }), {
    refetchOnReconnect: true,
    onSuccess: (data) => {
      setLinks(data);
    }
  });
  return (
    <>
      {isLoading && (
        <>
          {[1, 2, 3, 4].map((index) => (
            <Skeleton key={index} className={`h-14 w-full mt-[0.2rem] shadow-md transition-all ease-in-out duration-[85ms] bg-slate-200 relative`} />
          ))}
        </>
      )}

      {!isLoading && !isError && (
        <>
          {links?.length === 0 ? (
            <CustomAlert
              title={`There are no upcoming events`}
              description={`Please check back later`}
              variant={`default`}
            />
          ) : (
            links?.map((link, index) => (
              <LinksContentWrapper {...link} key={index} />
            ))
          )}
        </>
      )}

      {isError && (
        <CustomAlert
          title={`
        Error
      `}
          description={`
        There was an error fetching the links. Either switch from development environment, or check your internet connection.
      `}
          variant={`destructive`}
        />
      )}
    </>
  );
}
