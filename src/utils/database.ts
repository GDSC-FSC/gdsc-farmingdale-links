import {Client as PGClient} from 'pg';

const MAX_RETRIES = 5;
const RETRY_DELAY = 5_000; // 5 seconds

const db = new PGClient({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
});

process.on('SIGINT', async () => {
    await db.end();
    process.exit();
});

process.on('SIGTERM', async () => {
    await db.end();
    process.exit();
});

export default db;

export async function connectWithRetry(db: PGClient, retries = MAX_RETRIES): Promise<void> {
    while (retries) {
        try {
            await db.connect();
            console.log('Connected to the database!');
            break;
        } catch (error: any) {
            if (error.code === '57P01' || error.code === 'ECONNREFUSED') {
                console.error(`Database connection error (${error.code}), retrying in 5 seconds...`);
                retries--;
                if (retries === 0) {
                    console.error('Max retries reached. Could not connect to the database.');
                    throw error;
                }
                await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
            } else {
                console.error('Unexpected database error:', error);
                throw error;
            }
        }
    }
}

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});

process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Rejection:', reason);
    process.exit(1);
});