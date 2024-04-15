const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize2', 'root', 'OvB5+J9xl0OVMLpqd4HdQw',{
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectamos com sucesso com o Sequelize!')
} catch(err){
    console.log('Não foi possivel conectar: ', err)
}

module.exports = sequelize