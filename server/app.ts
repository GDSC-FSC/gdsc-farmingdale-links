import { errorHandler } from '#/middleware/errors';
import express, { Application, Request, Response } from 'express';
import { json } from 'body-parser';
import { scrapeEvents, scrapePastEvents } from '#/controllers/scraper';
import { saveEventsToFile } from '#/controllers/fileHandler';
import upcomingEventsRouter from '#/routes/upcomingEvents';
import pastEventsRouter from '#/routes/pastEvents';

// class App {
//     public router: Router = express.Router();
//     constructor() {
//         this.router.get('/', (req, res) => {
//             res.send("Welcome to the API!")
//         })
//     }
// }
// const api = new App()
// export default api;

const server: Application = express();
console.log('Server started');
const PORT = process.env.PORT || 3000;



server.use(json());
server.use(express.urlencoded({ extended: false }));

server.get('/', (_req: Request, res: Response) => {
	res.send(`
		<header>
			<nav>

			</nav>
		</header>
		<main>

		</main>
		<footer>
			
		</footer>
	`)
})
// server.use('/api/upcoming-events', upcomingEventsRouter);
// server.use('/api/past-events', pastEventsRouter);

server.use(errorHandler);

setInterval(
	async () => {
		console.log(
			'Weekly scrape started...'
		);

		const currentEvents =
			await scrapeEvents();
		const pastEvents =
			await scrapePastEvents();

		saveEventsToFile(
			currentEvents,
			'../data/upcoming-events.json'
		);
		saveEventsToFile(
			pastEvents,
			'../data/past-events.json'
		);

		console.log(
			'Daily scrape complete!'
		);
	},
	24 *
		60 *
		60 *
		1000
);

server.listen(PORT, async () => {
	console.log(
		`Server started on http://localhost:${PORT}/events`
	);

	console.log(
		'Initial scrape started...'
	);
	const initialUpcomingEvents =
		await scrapeEvents();
	const initialPastEvents =
		await scrapePastEvents();

	saveEventsToFile(
		initialUpcomingEvents,
		'../data/upcoming-events.json'
	);
	saveEventsToFile(
		initialPastEvents,
		'../data/past-events.json'
	);

	console.log(
		'Initial scrape complete!'
	);
});

export default server;
