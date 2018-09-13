const path = require('path')
const express = require('express')
const history = require('connect-history-api-fallback')
const app = express()

app.use(history())
app.use(express.static(path.resolve('..', 'client', 'dist')))

app.get('*', (req, res) => {
  res.status(200).sendFile('index.html')
})

app.listen(8081, () => {
  console.log('Server start...')
})