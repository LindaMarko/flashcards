const express = require('express')

const app = express()

app.set('view engine', 'pug')
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/cards', (req, res) => {
  res.render('card', { prompt: 'Who is buried in Grants tumb?' })
})

app.listen(3000, () => {
  console.log('Running on 3000..')
})
