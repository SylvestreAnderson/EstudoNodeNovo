const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) =>{

    const items = ["Item a", "item b", "Item c"]    


    res.render('dashboard', {items})
})

app.get('/', (req, res) =>{

    const user ={
        name: "Anderson",
        surname: "Sylvestre",
        age: 30
    }

    const palavra = 'Teste'

    const auth = false

    const approvad = true

    res.render('home', { user: user, palavra, auth, approvad})
})

app.listen(3000, ()=> {
    console.log('App funcionando!')
})