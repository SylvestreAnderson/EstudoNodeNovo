const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'OvB5+J9xl0OVMLpqd4HdQw',
    database: 'sylvestre',
    port: 3306
})

module.exports = pool