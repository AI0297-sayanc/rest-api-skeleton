const express = require("express")
const router = express.Router()

/** The Controller files */
const Token = require("./token.controller")

/**
 * @swagger
 *
 * /login:
 *   post:
 *     tags:
 *       - Authentication
 *     description: |
 *      **Login** to the application.
 *      This call authenticates the validity of a username / password combination. If the authentication is successful, a valid access token is issued. Use the username and password  provided to you in your FaretrackAPI packet.<br><br>**Example:**grant_type=password&username=&lt;username&gt;&password=&lt;password&gt;
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
 *     responses:
 *        200:
 *          description: Suv=ccess!
 *          schema:
 *            type: object
 *            properties:
 *              access_token: string
 */

router.post("/token", Token.post)

module.exports = router
