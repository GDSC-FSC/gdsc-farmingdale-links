import puppeteer from 'puppeteer';

async function scrapeWebsite() {
    try {
        const browser = await puppeteer.launch({
            headless: true // false for prod
        });

        const page = await browser.newPage();
        await page.goto('https://gdsc.community.dev/william-mary/');

        const events = await page.evaluate(() => {
            const eventContainers = document.querySelectorAll('div.col-md-12')!;

            return Array.from(eventContainers).map(container => {
                const titleNode = container.querySelector('h4.general-body--color')!;
                const title = titleNode?.textContent || null;

                const thumbnailLinkNode = container.querySelector('a.picture')! as HTMLAnchorElement | null;
                const detailsButton = container.querySelector('.btn.btn-primary.purchase-ticket')! as HTMLAnchorElement | null;

                return {
                    title,
                    thumbnailLink: thumbnailLinkNode ? thumbnailLinkNode.href : null,
                    detailsLink: detailsButton ? detailsButton.href : null
                };
            });
        });

        console.log(events);

        await browser.close();
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

scrapeWebsite();