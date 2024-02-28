const express = require('express')
const exphbs = require('express-handlebars')
const pg = require('postgres')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

const conn = new pg ({
    host:'localhost',
    user: 'postgres',
    password: 'd3s3nv@lt3c2009',
    port: 5432,
    database: 'postgres'
})


var client = new pg.Client(conn);
client.connect()