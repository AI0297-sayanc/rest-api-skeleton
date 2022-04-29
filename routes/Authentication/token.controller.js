module.exports = {
  async post(req, res) {
    try {
      return res.status(501).send("👽 Not Yet Implemented!")
    } catch (err) {
      return res.status(500).send(err.message)
    }
  }
}
