import fs from 'fs';
import path from 'path';
import { Event } from '../../types/shared/server';

export const saveEventsToFile = (events: Event[], filePath: string) => {
  const filteredEvents = events.filter(
    (event) => event.title !== null && event.thumbnailLink !== null && event.detailsLink !== null
  );

  const outputPath = path.resolve(__dirname, filePath);
  fs.writeFileSync(outputPath, JSON.stringify(filteredEvents, null, 2));
};

export const readEventsFromFile = (filePath: string) => {
  try {
    const data = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`An error occurred reading the ${filePath} file:`, error);
    throw error;
  }
};
