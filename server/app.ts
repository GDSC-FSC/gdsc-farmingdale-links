import express, { Router, Request, Response } from 'express';
import { errorHandler } from '#/middleware/errors';
// import upcomingEventsRouter from '#/routes/upcomingEvents';
// import pastEventsRouter from '#/routes/pastEvents';
import { readEventsFromFile } from './controllers/fileHandler';

class App {
    public router: Router = express.Router();

    constructor() {
        this.router.get('/', (_req: Request, res: Response) => {
            // send(), after a series of write() and end() calls
            // write() is used to send a chunk of the response body [use it to test pushing the head element so the scripts can work]
            res.set('content-type', 'text/html')
            res.send(Buffer.from("<head><!-- Google tag (gtag.js) --><script async src=\"https://www.googletagmanager.com/gtag/js?id=G-6Y3ZH3YMK6\"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-6Y3ZH3YMK6');</script><style>@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Poppins:wght@300;400;500;600&display=swap');:root {--card-border-radius: 10px;}* {scroll-behavior: smooth;box-sizing: border-box;transition: 0.25s all ease;list-style: none;text-decoration: none;overflow-y: hidden;overflow-x: hidden;}html {font-size: 16px;font-weight: 400;line-height: 1.5;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;height: 100%;font-family: 'Noto Sans', sans-serif;width: 100dvw;body { width: 100%; height: 100%; margin: 0; padding: 0; display: flex; flex-direction: column; background-image:radial-gradient(at 86% 45%, hsla(0, 0%, 19%, 1) 0px, transparent 50%),radial-gradient(at 21% 96%, hsla(0, 0%, 28%, 1) 0px, transparent 50%),radial-gradient(at 16% 5%, hsla(0, 0%, 15%, 1) 0px, transparent 50%),radial-gradient(at 94% 56%, hsla(0, 0%, 6%, 1) 0px, transparent 50%),radial-gradient(at 66% 76%, hsla(0, 0%, 26%, 1) 0px, transparent 50%),radial-gradient(at 7% 2%, hsla(0, 1%, 28%, 1) 0px, transparent 50%),radial-gradient(at 49% 76%, hsla(0, 0%, 13%, 1) 0px, transparent 50%);nav {display: flex;flex-direction: row;justify-content: space-between;align-items: center;height: 80px;width: 100dvw;position: fixed;top: 0;font-size: medium;font-weight: bold;margin: 0;padding-inline: 1rem;background: rgba(0, 0, 0, 0.2);backdrop-filter: blur(5px);z-index: 10;a:link,a:visited {color: white !important;text-decoration: none !important;}menu:nth-child(1) {display: flex;flex-direction: row;justify-content: center;align-items: center;margin: 0;padding: 0;li {display: flex;flex-direction: row;justify-content: center;align-items: center;gap: 0.5rem;}}menu:nth-child(2) {display: flex;flex-direction: row;justify-content: center;align-items: center;li {display: flex;flex-direction: row;justify-content: center;align-items: center;gap: 0.5rem;a {  color: white;}i {height: 40px;width: 40px;}}}}header {user-select: none;picture {img {object-fit: cover;object-position: center;transition: 0.25s all ease;&:hover {filter: grayscale(100%);}}}}main {margin-top: 20px;margin-inline: auto;display: flex;flex-direction: row;justify-content: center;align-items: center;gap: 2rem;height: fit-content;position: relative;.card {background: hsl(0, 0%, 10%, 0.2);backdrop-filter: blur(5px);aspect-ratio: 4 / 2;position: relative;transition: background 0.1s;border-radius: var(--card-border-radius);&:hover {--active: 1;}&:after {content: \"\";position: absolute;inset: 0;background:radial-gradient(circle at calc(var(--x) * 1px) calc(var(--y) * 1px), hsl(0 0% 100% / 0.15), transparent 15vmin); background-attachment: fixed; opacity: var(--active, 0); transition: opacity 0.2s; pointer-events: none; border-radius: var(--card-border-radius);}&:before {content: \"\";position: absolute;inset: 0;background:radial-gradient(circle at calc(var(--x) * 1px) calc(var(--y) * 1px), hsl(0 0% 100% / 0.5), transparent 15vmin),transparent;background-attachment: fixed;pointer-events: none;mask:linear-gradient(white, white) 50% 0 / 100% 4px no-repeat,linear-gradient(white, white) 50% 100% / 100% 4px no-repeat,linear-gradient(white, white) 0 50% / 4px 100% no-repeat,linear-gradient(white, white) 100% 50% / 4px 100% no-repeat;mask-composite: exclude;mask-repeat: no-repeat;mask-size: 100% 50%, 100% 50%, 50% 100%, 50% 100%;mask-position: 0 0, 0 100%, 0 0, 100% 0;transition: opacity 0.2s;opacity: var(--active, 0);}}section {max-width: 800px;min-width: 400px;max-height: 600px;min-height: 300px;margin-right: 2rem;width: 100%;article {width: fit-content;h2 {font-size: 2rem;font-weight: bold;text-align: left;margin-bottom: 1rem;}p {font-size: 1rem;text-align: left;text-indent: 2rem;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;hyphens: auto;margin-bottom: 1rem;a {color: #3366cc;}}section[role=\"group\"] {display: flex;flex-direction: row;justify-content: space-between;width: 100%;details {width: 330px;height: 350px;ul {border-top-right-radius: 0px !important;border-top-left-radius: 0px !important;margin-top: 0;width: 300px !important;padding-left: 0 !important;overflow: auto;&:after {border-top-right-radius: 0px !important;border-top-left-radius: 0px !important;}li {list-style-type: single-emoji !important;width: 100% !important;margin-left: auto;p {width: 100%;font-size:small;text-align: left !important;margin-left: auto;padding-left: 0;left: -20px;strong {text-align: left !important;}}}}}details>p {display: inline-block;width: 300px;padding: 0 0 0 1rem;height: 0;overflow: hidden;font-weight: 300;}details[open]>p {padding: 1rem 0 1rem 2rem;height: fit-content;}summary {width: 300px;padding: 1rem; border-top-right-radius: 10px;border-top-left-radius: 10px;border-top: 1px solid black; border-inline: 1px solid black;border-bottom: 1px solid black;font-weight: 600;cursor: pointer;position: relative;&::after {content: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' %3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E%0A\");position: absolute;top: 50%;right: 0;width: 20px;translate: 0 -35%;transition: rotate 0.2s;transform-origin: 50% 40%;}&::after {content: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='hsl(0 0% 98%)' %3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E%0A\");}}details[open] summary::after {rotate: -180deg;}}}}}}footer {padding-inline: 1rem;display: flex;justify-content: space-between;align-items: center;height: 80px;bottom: 0;width: 100%;background: rgba(0, 0, 0, 0.5);font-size: medium;font-weight: bold;position: absolute;p:nth-child(1) {margin-left: 40px;}p:last-child {margin-right: 40px;a:link,a:visited {color: white !important;text-decoration: underline !important;}}}}@media (prefers-color-scheme: light) {html,body {background-color: #181818;color: black;}}@media (prefers-color-scheme: dark) {html,body {background-color: #181818;color: whitesmoke;}summary {border-color: hsl(0 0% 98% / 0.5);}}@counter-style single-emoji {system: cyclic !important;symbols: \"\\2B50\" !important;suffix: \" \" !important;}</style></head><nav><menu><li><img src=\"/assets/images/Logo.png\" alt=\"Logo\" width=\"40\" height=\"40\" aria-hidden=\"true\" /><a id=\"organization\" target=\"_blank\" rel=\"noopener noreferrer\"><span>GDSC</span> Farmingdale</a></li></menu><menu><li><i class=\"fa-brands fa-github\" aria-hidden=\"true\"></i><a id=\"repository\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a></li></menu></nav><header><picture><img src=\"/assets/images/og.png\" alt=\"banner\" width=\"100%\" height=\"100%\"></picture></header><main><section><article><h2>GDSC Links API</h2><p>The purpose of this <a href=\"https://en.wikipedia.org/wiki/API\" rel=\"noopener noreferrer\" target=\"_blank\">API</a>&nbsp;is to provide a way for any GDSC <!-- Finish this later -->.This api returns 2 json objects,&nbsp;<strong>'past-events'</strong><sup></sup>&nbsp;(found in&nbsp;<a href=\"/api/past-events\" target=\"_self\" rel=\"noopener noreferrer\"><i>\"https://{domain}/api/past-events\"</i></a>) and<strong>'upcoming-events'</strong>&nbsp;(found in&nbsp;<a href=\"/api/upcoming-events\" target=\"_self\" rel=\"noopener noreferrer\"><i>\"https://{domain}/api/upcoming-events\"</i></a>).</p><section role=\"group\"><details name=\"accordion\"><summary>Past Events</summary><ul class=\"card\"><li><p><strong>title:</strong>string</p></li><li><p><strong>thumbnailLink:</strong>string</p></li><li><p><strong>detailsLink:</strong>string</p></li></ul></details><details name=\"accordion\"><summary>Upcoming Events</summary><ul class=\"card\"><li><p><strong>title:</strong>string</p></li><li><p><strong>thumbnailLink:</strong>string</p></li><li><p><strong>detailsLink:</strong>string</p></li></ul></details></section></article></section></main><footer><p>© 2023-2023 GDSC Farmingdale</p><p>Made with 🖤 by <a href=\"https://mikeodnis.com/\">Mike Odnis</a></p></footer><script src=\"https://kit.fontawesome.com/a93e9f2175.js\" crossorigin=\"anonymous\"></script>"));
        });

				this.router.get('/upcoming-events', async (_req: Request, res: Response) => {
          res.header('Access-Control-Allow-Origin', '*');
          console.log('Requested upcoming events');
          try {
            const data = await readEventsFromFile('./data/upcoming-events.json');
            res.json(data);
          } catch (error) {
            console.error('An error occurred:', error);
            res.status(500).send('Internal Server Error');
          }
        });

        this.router.get('/past-events', async (_req: Request, res: Response) => {
          res.header('Access-Control-Allow-Origin', '*');
          console.log('Requested past events');
          try {
            const data = await readEventsFromFile('./data/past-events.json');
            res.json(data);
          } catch (error) {
            console.error('An error occurred:', error);
            console.log(error);
            res.status(500).send('Internal Server Error');
          }
        });

        this.router.use(errorHandler);
    }
}

const server = new App();
export default server;

