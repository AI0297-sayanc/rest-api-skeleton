const mssql = require("mssql")
const logger = require("../lib/logger")
let appPool

async function connect() {
  const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: "localhost",
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
  }
  logger.info("Connecting to MSSql DB ⌛")
  appPool = new mssql.ConnectionPool(sqlConfig)
  if (appPool === undefined) throw new Error("Failed to define mssql client pool!!")
  await appPool.connect()
  logger.info("Connected to MSSql DB 💯")
}

async function get() {
  return appPool
}

async function close() {
  await appPool.close()
}

module.exports = {
  connect,
  get,
  close
}
