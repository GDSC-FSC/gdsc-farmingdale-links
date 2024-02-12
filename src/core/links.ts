import { z } from 'zod';

export const Link = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
  link: z.string(),
  description: z.string()
});
/*
    const [pastEvents, setPastEvents] = useState<Events[]>([]);
    const [upcomingEvents, setUpcomingEvents] = useState<Events[]>([]);
    useEffect(() => {
        async function fetchPastEvents() {
            try {
                fetch(`${import.meta.env.BASE_URL}/api/past-events`)
                    .then((response) => {response.json()
                    .then((data) => {
                        setPastEvents(data);
                })});
            } catch (error) {
                console.error('Failed to fetch past events:', error);
            }
        }
        async function fetchUpcomingEvents() {
            try {
                fetch(`${import.meta.env.BASE_URL}/api/upcoming-events`)
                    .then((response) => {
                        response.json()
                        .then((data) => {
                            setUpcomingEvents(data);
                        })
                    });
            } catch (error) {
                console.error('Failed to fetch past events:', error);
            }
        }
        fetchPastEvents();
        fetchUpcomingEvents();
    }, []);
    const events = [...pastEvents, ...upcomingEvents];
*/

  c
