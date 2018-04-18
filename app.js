const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.get('/', (request, response) => {
    response.render('home')
})

app.listen(3000, () => {
    console.log('Example app is running at port 3000')
})