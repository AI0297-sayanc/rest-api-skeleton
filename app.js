const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const cors = require("cors")
const helmet = require("helmet")

const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUI = require("swagger-ui-express")

require("dotenv").config() // set up process.env as early as possible!

const swaggerDefinition = require("./swaggerRootDefinition")
const swaggerOptions = {
  swaggerDefinition,
  apis: ["./routes/**/*.js"],
}
const swaggerSpec = swaggerJSDoc(swaggerOptions)

const mainRouter = require("./routes")

const app = express()

if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV !== "development") {
  app.use(helmet())
}
app.use(cors())

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec))
app.use("/", mainRouter)

module.exports = app
