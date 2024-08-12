const {Sequelize } = require('sequelize')

const Connection = new Sequelize({
    dialect: 'postgres',
    host:'primarily-super-ermine.data-1.use1.tembo.io',
    port:'5432',
    username: 'postgres',
    password: 'ALBUct3kJoWxxQfB',
    database: 'fs29'
})

module.exports = Connection

