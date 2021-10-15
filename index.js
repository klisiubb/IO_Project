const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/register', (req, res) => {
    res.render('register')
  })
app.get('/login', (req, res) => {
    res.render('login')
  })

app.listen(port, () => {
  console.log(`Portal PLX działa na porcie: ${port}`)
})