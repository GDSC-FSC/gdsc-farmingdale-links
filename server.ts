/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import server from './server/app.ts';
import { scrapeEvents, scrapePastEvents } from './server/controllers/scraper.ts';
import { saveEventsToFile } from './server/controllers/fileHandler.ts';

const __dirname: string = path.dirname(fileURLToPath(import.meta.url));
const isTest = process.env.VITEST;
const isProd = process.env.NODE_ENV === 'production'
const root: string = process.cwd();

const resolve = (_path: string) => path.resolve(__dirname, _path);

const indexProd: string = isProd
    ? fs.readFileSync(resolve('client/index.html'), 'utf-8')
    : ''

const createServer = async () => {

    const app = express();

    let vite: any;

    if (!isProd) {
        vite = await (await import('vite')).createServer({
            root,
            logLevel: isTest ? 'error' : 'info',
            server: {
                middlewareMode: true,
                watch: {
                    usePolling: true,
                    interval: 100
                }
            },
            appType: "custom"
        })

        app.use(vite.middlewares)
    }

    if (isProd) {
        app.use((await import('compression')).default())

        app.use(
            (await import('serve-static')).default(resolve('./client'), {
                index: false
            })
        )
    }

    // api routes
    app.use('/api', server.router)

    app.use('*', async (req, res) => {
        try {

            const url = req.originalUrl;

            let template, render;

            if (!isProd) {
                template = fs.readFileSync(resolve('index.html'), 'utf8')
                template = await vite.transformIndexHtml(url, template)

                render = (await vite.ssrLoadModule('/src/entry-server.tsx')).default.render;
            }

            if (isProd) {
                template = indexProd;

                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                render = (await import('../entry/entry-server.js')).default.render;
            }

            const context: any = {};
            const appHtml = render(url, context)

            if (context.url) return res.redirect(301, context.url);

            const html = template.replace('<!--app-html-->', appHtml.html)

            res.status(200).set({ "Content-Type": "text/html" }).end(html)

        } catch (e: any) {
            !isProd && vite.ssrFixStacktrace(e)
            console.log(e.stack)
            res.status(500).end(e.stack)
        }
    })

    setInterval(async () => {
        console.log('Weekly scrape started...');

        const currentEvents = await scrapeEvents();
        const pastEvents = await scrapePastEvents();

        saveEventsToFile(currentEvents, '/data/upcoming-events.json');
        saveEventsToFile(pastEvents, '/data/past-events.json');

        console.log('Weekly scrape complete!');
    }, 24 * 60 * 60 * 1000);

    console.log('Initial scrape started...');

    const initialUpcomingEvents = await scrapeEvents();
    const initialPastEvents = await scrapePastEvents();
    
    saveEventsToFile(initialUpcomingEvents, './data/upcoming-events.json');
    saveEventsToFile(initialPastEvents, './data/past-events.json');

        console.log('Initial scrape complete!');

    return { app, vite }
}

if (!isTest) {
    const { app } = await createServer();
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server running on http://localhost:${process.env.PORT || 3000}`);
    });
}