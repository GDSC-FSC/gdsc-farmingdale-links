import express from 'express';
import { scrapeEvents, scrapePastEvents } from './controllers/scraper';
import { saveEventsToFile } from './controllers/fileHandler';
import upcomingEventsRouter from './routes/upcomingEvents'
import pastEventsRouter from './routes/pastEvents';

const app = express();
console.log('Server started');
const PORT =  process.env.PORT || 3000;

if (!process.env.VITE) {
    const frontendFiles = process.cwd() + '/dist';
    app.use(express.static(frontendFiles));
    app.get('/*', (_, res) => {
        res.send(frontendFiles + '/index.html');
    });
}

app.use('/api/upcoming-events', upcomingEventsRouter);
app.use('/api/past-events', pastEventsRouter);

setInterval(async () => {
    console.log('Weekly scrape started...');

    const currentEvents = await scrapeEvents();
    const pastEvents = await scrapePastEvents();

    saveEventsToFile(currentEvents, '../data/upcoming-events.json');
    saveEventsToFile(pastEvents, '../data/past-events.json');

    console.log('Daily scrape complete!');
}, 24 * 60 * 60 * 1000);

app.listen(PORT, async () => {
    console.log(`Server started on http://localhost:${PORT}/events`);

    console.log('Initial scrape started...');
    const initialUpcomingEvents = await scrapeEvents();
    const initialPastEvents = await scrapePastEvents();

    saveEventsToFile(initialUpcomingEvents, '../data/upcoming-events.json');
    saveEventsToFile(initialPastEvents, '../data/past-events.json');

    console.log('Initial scrape complete!');
});
