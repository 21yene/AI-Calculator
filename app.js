const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This my first trial for nodejs app in docker. hello again here')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
