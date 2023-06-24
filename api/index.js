require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3333

app.use(express.json())

app.get('/', (req, res) => {
  res.redirect('/api')
})
app.get('/api', (req, res) => {
  res.json({
    port: PORT,
    method: req.method,
    time: new Date().toLocaleTimeString(),
    payload: 'Hello World!'
  })
})
app.post('/api', (req, res) => {
  res.json({
    port: PORT,
    method: req.method,
    time: new Date().toLocaleTimeString(),
    payload: req.body
  })
})

app.listen(PORT, (err) => {
  if (err) return console.log(err)

  console.log('[INFO] Server Running on port: ', PORT)
})
