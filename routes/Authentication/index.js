const express = require("express")
const router = express.Router()

/** The Controller files */
const Token = require("./token.controller")

/**
 * @swagger
 *
 * /login:
 *   post:
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         in: formData
 *         required: true
 *         type: string
 */

router.post("/token", Token.post)

module.exports = router
