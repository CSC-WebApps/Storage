const express = require('express')
const app = express()
const port = 3111


app.use(express.static('www'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})