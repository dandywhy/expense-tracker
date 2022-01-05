const express = require('express')
const { engine } = require('express-handlebars')
const session = require('express-session')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const routes = require('./routes')
const { route } = require('express/lib/application')

const app = express()
const PORT = 3000

app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)


app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`))