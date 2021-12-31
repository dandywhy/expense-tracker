const express = require('express')
const { engine } = require('express-handlebars')
const session = require('express-session')


const app = express()
const PORT = 3000

app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => res.render('index'))

app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`))