const express = require("express")
const router = express.Router()

router.all("*", (req, res) => res.status(501).send("👽 Not Yet Implemented!"))

module.exports = router
