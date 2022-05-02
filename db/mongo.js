const { MongoClient } = require("mongodb")
const { MONGO_URI, MONGO_DBNAME } = process.env
let mongoClient

async function connect() {
  console.log("⌛ Connecting to Mongo DB");
  mongoClient = await MongoClient.connect(MONGO_URI)
  if (mongoClient === undefined) throw new Error("Failed to define mongo client!!")
  console.log("💯 Connected to Mongo DB");
}

async function get(dbname = MONGO_DBNAME) {
  return mongoClient.db(dbname)
}

async function close() {
  mongoClient.close()
}

module.exports = {
  connect,
  get,
  close
}
