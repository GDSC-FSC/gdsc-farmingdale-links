import { useQuery } from 'react-query'
import axios from 'axios'
import { useLinksStore } from '@/src/core/store'
import { Skeleton } from '@/src/components/ui/skeleton'
import { toast } from 'sonner'
import { CustomAlert } from '@/src/components/custom/core/index'
import LinksContentWrapper from '../ui/LinksContentWrapper'

export const Links = function Links() {
  const { setLinks } = useLinksStore();
  async function fetchLinks() {
    const headers = {
      'API-Key': import.meta.env.VITE_LINKS_API_KEY,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_LINKS_API_BEARER_TOKEN}`
    };

    const response = await axios.get(import.meta.env.VITE_LINKS_API_URL, { headers });

    if (!response || response.status !== 200) {
      toast.error(`🚨Failed to fetch links🚨`)
    }

    return response.data;
  }
  const { data: links, isLoading, isError } = useQuery('links', fetchLinks, {
    onSuccess: (data) => {
      setLinks(data);
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
      {links?.map((link: Links, index: string | number) => (
        <LinksContentWrapper {...link} key={index} />
      ))}
    </>
  );
}
