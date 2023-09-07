import puppeteer from 'puppeteer';
import db, {connectWithRetry} from '../utils/database';
import dotenv from 'dotenv';

dotenv.config();

async function getLastFivePastEvents() {
    const res = await db.query(
        `SELECT *
         FROM past_events
         WHERE scraped_at < NOW()
         ORDER BY scraped_at DESC
         LIMIT 5`
    );
    return res.rows;
}

async function getNextThreeCurrentEvents() {
    const res = await db.query(
        `SELECT *
         FROM current_events
         WHERE scraped_at < NOW()
         ORDER BY scraped_at DESC
         LIMIT 5`
    );
    return res.rows;
}

export async function scrapeWebsite() {
    try {
        await connectWithRetry(db);

        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        await page.goto('https://gdsc.community.dev/william-mary/');

        const events = await page.evaluate(() => {
            const eventContainers = document.querySelectorAll('div.col-md-12');

            return Array.from(eventContainers).map(container => {
                const titleNode = container.querySelector('h4.general-body--color');
                const title = titleNode?.textContent || null;

                const thumbnailLinkNode = container.querySelector('a.picture') as HTMLAnchorElement | null;
                const detailsButton = container.querySelector('.btn.btn-primary.purchase-ticket') as HTMLAnchorElement | null;

                return {
                    title,
                    thumbnailLink: thumbnailLinkNode ? thumbnailLinkNode.href : null,
                    detailsLink: detailsButton ? detailsButton.href : null
                };
            });
        });

        console.log(events);

        for (const event of events) {
            await db.query(
                `INSERT INTO current_events (title, thumbnail_link, details_link)
                 VALUES ($1, $2, $3)
                 ON CONFLICT (title)
                     DO NOTHING`,
                [event.title, event.thumbnailLink, event.detailsLink]
            );
        }

        const {rows: pastEventsFromCurrent} = await db.query(
            `SELECT *
             FROM current_events
             WHERE scraped_at < NOW()`
        );

        for (const event of pastEventsFromCurrent) {
            await db.query('BEGIN');
            try {
                await db.query(
                    `INSERT INTO past_events (title, thumbnail_link, details_link, scraped_at)
                     VALUES ($1, $2, $3, $4)
                     ON CONFLICT (title) DO NOTHING`,  // Or DO UPDATE if you want to update details
                    [event.title, event.thumbnailLink, event.detailsLink, event.scraped_at]
                );
                await db.query(`DELETE
                                FROM current_events
                                WHERE id = $1`, [event.id]);
                await db.query('COMMIT');
            } catch (error) {
                await db.query('ROLLBACK');
                throw error;
            }
        }

        await browser.close();

        console.log('Last 5 Past Events:', await getLastFivePastEvents());
        console.log('Next 3 Current Events:', await getNextThreeCurrentEvents());

    } catch (error) {
        console.error('An error occurred:', error);
    }
    const pastEvents = await getLastFivePastEvents();
    const currentEvents = await getNextThreeCurrentEvents();

    return {pastEvents, currentEvents};
}

scrapeWebsite();