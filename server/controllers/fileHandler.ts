/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDirectory = path.join(__dirname, '..', '..', 'server');

export const saveEventsToFile = async (events: Events[], filename: string) => {
  try {
    try {
      await fs.promises.mkdir(dataDirectory);
    } catch (mkdirError: any) {
      if (mkdirError.code !== 'EEXIST') {
        throw mkdirError;
      }
    }
    const filteredEvents = events.filter(
      (event) => event.title !== null && event.thumbnailLink !== null && event.detailsLink !== null
    );

    const outputPath = path.join(dataDirectory, filename);

    fs.writeFileSync(outputPath, JSON.stringify(filteredEvents, null, 2));
  } catch (error) {
    console.error(`An error occurred while saving events to the file: ${filename}`, error);
    throw error;
  }
};

export const readEventsFromFile = async (filename: string) => {
  try {
    try {
      await fs.promises.mkdir(dataDirectory);
    } catch (mkdirError: any) {
      if (mkdirError.code !== 'EEXIST') {
        throw mkdirError;
      }
    }
    const filePath = path.join(dataDirectory, filename);

    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`An error occurred reading the ${filename} file:`, error);
    throw error;
  }
};
