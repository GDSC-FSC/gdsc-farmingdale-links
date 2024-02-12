/* eslint-disable @typescript-eslint/no-explicit-any */
import request from 'supertest';
import { expect, test, suite } from "vitest";

suite("Check response structures", () => {
  test("Check past events response structure", async () => {
    const res = await request("http://localhost:3000").get("/api/past-events").expect(200);
    if (Array.isArray(res.body)) {
      expect(Array.isArray(res.body)).toBe(true);
    } else {
      res.body.forEach((item: any) => {
        expect(typeof item).toBe("object");
        expect(item).toHaveProperty("title");
        expect(typeof item.title).toBe("string");
        expect(item).toHaveProperty("thumbnailLink");
        expect(typeof item.thumbnailLink).toBe("string");
        expect(item).toHaveProperty("detailsLink");
        expect(typeof item.detailsLink).toBe("string");
      });
    }
  })

  test("Check upcoming events response structure", async () => {
    const res = await request("http://localhost:3000").get("/api/upcoming-events").expect(200);

    if (Array.isArray(res.body)) {
      expect(Array.isArray(res.body)).toBe(true);
    } else {
      res.body.forEach((item: any) => {
        expect(typeof item).toBe("object");
        expect(item).toHaveProperty("title");
        expect(typeof item.title).toBe("string");
        expect(item).toHaveProperty("thumbnailLink");
        expect(typeof item.thumbnailLink).toBe("string");
        expect(item).toHaveProperty("detailsLink");
        expect(typeof item.detailsLink).toBe("string");
      });
    }
  });
})

suite("Check response status codes", () => {
  test("Check past events response status code", async () => {
    const res = await request("http://localhost:3000").get("/api/past-events").expect(200);
    expect(res.status).toBe(200);
  })
  test("Check upcoming events response status code", async () => {
    const res = await request("http://localhost:3000").get("/api/upcoming-events").expect(200);
    expect(res.status).toBe(200);
  });
})

suite("Should only be able to use GET method", () => {
  test("Check past events response status code", async () => {
    const res = await request("http://localhost:3000").post("/api/past-events").expect(404);
    expect(res.status).toBe(404);
  })
  test("Check upcoming events response status code", async () => {
    const res = await request("http://localhost:3000").post("/api/upcoming-events").expect(404);
    expect(res.status).toBe(404);
  });
})