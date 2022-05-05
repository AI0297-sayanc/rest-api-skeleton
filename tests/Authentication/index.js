// eslint-disable-next-line import/no-unresolved
const test = require("ava")
const request = require("supertest")

const app = require("../../app")
const mssql = require("../../db/mssql")

test.before(async () => mssql.connect())

test("My First Test!", async (t) => {
  const response = await request(app).post("/auth/token")
  t.is(response.status, 501)
  t.assert(["not", "implement"].every((word) => response.text.toLowerCase().includes(word)))
})
