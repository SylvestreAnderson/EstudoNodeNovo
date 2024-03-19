const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.render('home')
})

app.post('/books/insertbook', (req, res) =>{

    const title = req.body.title
    const pageqty = req.body.pageqty

    console.log(`O nome do Titulo ${title} e tem qtde ${pageqty} Paginas`)

    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', ${pageqty})`

    conn.query(sql, function(err){
        if(err){
            console.log(err)
        }

        res.redirect('/')
    })
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

