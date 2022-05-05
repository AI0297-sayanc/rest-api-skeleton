const db = require("../../db/mssql")
module.exports = {
  async post(req, res) {
    try {
      const pool = await db.get()
      const { recordset } = await pool.query("select * from dbo.spt_monitor")
      req.logger.info(JSON.stringify(recordset, null, 2))
      return res.status(501).send("👽 Not Yet Implemented!")
    } catch (err) {
      return res.status(500).send(err.message)
    }
  }
}
