const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = db.define('User', {
    nema:{
        type: DataTypes.STRING,
        allowNull: false
    },
    ocupation: {
        type: DataTypes.STRING,
        require: true
    },
    newletter: {
        type: DataTypes.BOOLEAN,
    },
})

module.exports = User