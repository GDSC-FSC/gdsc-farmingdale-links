import express from 'express';
import { readEventsFromFile } from '../controllers/fileHandler';

const router = express.Router();

router.get('/', (_req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  console.log('Requested past events');
  try {
    const data = readEventsFromFile('../data/past-events.json');
    res.json(data);
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
