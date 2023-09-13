import React, {useEffect, useState} from 'react';
import {navLinks} from './utils';
import {GDSCIcon} from './components/icons';
import {Button} from './components/index';
import {ThemeProvider} from './components/theme-provider';

const name = 'GDSC Farmingdale';

type Event = {
    title: string;
    thumbnailLink: string;
    detailsLink: string;
};

export default function App() {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await fetch('http://localhost:3000/events');
                const data = await response.json();
                console.log('Fetched data:', data);
                setEvents(data);
            } catch (error) {
                console.error('Failed to fetch events:', error);
            }
        }

        fetchEvents();
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
            return (
                <div className="flex flex-col w-full gap-4 overflow-y-auto">
                    {events.map((event) => {
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
                <GDSCIcon width={100} height={100}/>
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