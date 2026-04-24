const request = require("supertest");
const app = require("../app");

test("GET / should return Hola Mundo", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("Hola Mundo DevOps 🚀");
});