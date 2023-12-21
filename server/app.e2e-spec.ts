import request from 'supertest';
import server from './app';
import { describe, expect, it } from "vitest";

describe('Hello world', () => {
  it('should display hello world message', async () => {
    const response = await request(server).get('/').send();

    expect(response.statusCode).toBe(200);
  })
});