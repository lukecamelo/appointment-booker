const express = require('express')

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send({ express: 'Hey from express'})
})

app.listen(port, () => console.log(`listening on port ${port}`))