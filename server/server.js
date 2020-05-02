const express = require("express")
const path = require("path")
const app = express()

const port = process.env.PORT || 3000

const publicpath = path.join(__dirname, "..", "dist")
app.use(express.static(publicpath))

app.get("*", (req, res) => {
  res.sendFile(path.join(publicpath, "index.html"))
})

app.listen(port, () => {
  console.log("server is running in port ..." + port)
})
