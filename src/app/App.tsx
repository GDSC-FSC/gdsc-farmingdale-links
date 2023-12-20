import React, { useEffect, useState } from 'react';
import { navLinks } from '@/utils';
import { Icons } from '@/components/icons/icons';
import { Button } from '@/components/dom/index';
import { ThemeProvider } from '@/components/providers/theme/theme-provider';

const name = 'GDSC Farmingdale';

type Event = {
    title: string;
    thumbnailLink: string;
    detailsLink: string;
};

export default function App() {
    const [pastEvents, setPastEvents] = useState<Event[]>([]);
    const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
    useEffect(() => {

        async function fetchPastEvents() {
            try {
                // The forward slash might be a problem
                console.log(import.meta.env.BASE_URL)
                const response = await fetch(`${import.meta.env.BASE_URL}/api/past-events`);
                const data = await response.json();
                console.log('Fetched data:', data);

                // Just want the json payload
                // const updatedData = data.map((event: Event) => {
                //     return {
                //         ...event,
                //         detailsLink: BASE_URL + event.detailsLink,
                //         thumbnailLink: BASE_URL + event.thumbnailLink,
                //     };
                // });

                // setPastEvents(updatedData);
                setPastEvents(data);
            } catch (error) {
                console.error('Failed to fetch past events:', error);
            }
        }

        async function fetchUpcomingEvents() {
            try {
                console.log(import.meta.env.BASE_URL)
                const response = await fetch(`${import.meta.env.BASE_URL}/api/upcoming-events`);
                const data = await response.json();
                console.log('Fetched data:', data);
                setUpcomingEvents(data);
            } catch (error) {
                console.error('Failed to fetch past events:', error);
            }
        }

        fetchPastEvents();
        fetchUpcomingEvents();
    }, []);


    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
        const cards = document.getElementsByClassName('card');
        for (const card of cards) {
            if (card instanceof HTMLElement) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        }
    };

    const NavigationContainer = () => {
        const Buttons = () => {
            console.log(event);
            return (
                <div className="flex flex-col w-full gap-4 overflow-y-auto">
                    {events.map((event) => {
                        console.log(event);
                        if (!event.title) return null;
                        return (
                            <Button
                                key={event.title}
                                title={event.title}
                                link={event.detailsLink}
                                containerStyles="h-[30px]"
                                share={true}
                                textStyles="font-bold text-[14px]"
                            />

                        );
                    })}

                </div>
            );
        };
    
        return (
            <div className="flex flex-col items-center justify-center w-[90%]">
                <h3 className="mb-3">Events</h3>
                <Icons.logo props={{
                    
                }}/>
                <Buttons/>
            </div>
        );
    };
    const Header = () => {
        const Links = () => {
            return (
                <div className="flex items-center justify-center gap-2">
                    {navLinks.map((item) => {
                        return (
                            <a key={item.name} className="rounded-lg " href={item.path} target="_blank">
                                {item.icon && <item.icon/>}
                            </a>
                        );
                    })}
                </div>
            );
        };
    
        return (
            <header className="flex flex-col items-center justify-center gap-2">
                <GDSCIcon className={``}/>
                <h1 className="text-sm font-bold">{name}</h1>
                <Links/>
            </header>
        );
    };
    return (
        <ThemeProvider
            defaultTheme={`system`}
            storageKey="vite-ui-theme"
        >
            <React.Fragment>
                <section
                    id={`card`}
                    onMouseMove={handleMouseMove}
                    className="rounded-md shadow-md w-[300px] mt-[50px] mb-[50px] h-[80vh] justify-around items-center flex flex-col light:glass-card border-2">
                    <Header/>
                    <NavigationContainer/>
                </section>
            </React.Fragment>
        </ThemeProvider>
    );
}