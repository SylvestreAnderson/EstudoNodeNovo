const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'OvB5+J9xl0OVMLpqd4HdQw',
    database: 'sylvestre',
    port: 3306
})

conn.connect(function(err){
    if(err){
        console.log(err);
    }

    console.log('Conectou ao Mysql!')

    app.listen(3000)
})

