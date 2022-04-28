const express = require("express")
const router = express.Router()

/** Standalone Express modules corresponding to the defined Swagger tags */
const Authentication = require("./Authentication")
const Accounts = require("./Accounts")
const Shops = require("./Shops")
const Hooks = require("./Hooks")
const References = require("./References")
const Schedules = require("./Schedules")

router.use("/auth", Authentication)
router.use("/accounts", Accounts)
router.use("/shops", Shops)
router.use("/hooks", Hooks)
router.use("/references", References)
router.use("/schedules", Schedules)

module.exports = router
