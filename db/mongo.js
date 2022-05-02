const { MongoClient } = require("mongodb")
const { MONGO_URI, MONGO_DBNAME } = process.env
let mongoClient

function connect(callback) {
  console.log("⌛ Connecting to Mongo DB");
  MongoClient.connect(MONGO_URI, (err, client) => {
    if (err) {
      callback(err)
      return
    }
    if (client === undefined) {
      callback(new Error("Failed to define mongo client!!"))
      return
    }
    mongoClient = client
    console.log("💯 Connected to Mongo DB");
    callback(null)
  })
}

function get(dbname = MONGO_DBNAME) {
  return mongoClient.db(dbname)
}

function close() {
  mongoClient.close()
}

module.exports = {
  connect,
  get,
  close
}
