const pino = require("pino")

const targets = [{ target: "pino-pretty", options: { ignore: "pid,hostname" } }]
if (process.env.LOG_FILE_PATH !== undefined && process.env.LOG_FILE_PATH.trim() !== "") {
  targets.push({
    target: "pino/file",
    level: process.env.LOG_FILE_LEVEL || "error",
    options: { destination: process.env.LOG_FILE_PATH, mkdir: true },
  })
}

module.exports = pino({ transport: { targets } })
