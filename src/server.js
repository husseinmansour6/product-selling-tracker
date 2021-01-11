const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const ObjectID = require("mongoose").ObjectID
app.use(bodyParser.raw({ type: "*/*" }))
const db = require("./modules/db")

app.get("/", function(req, res) {
  console.log({ db })
})

app.listen(3000, () => {
  console.log("Server starts at port 3000.")
})
