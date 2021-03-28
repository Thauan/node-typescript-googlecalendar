import { Sequelize } from 'sequelize-typescript'
const databaseConfig = require('../config/database')

export const sequelize = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, {
  host: databaseConfig.host,
  dialect: databaseConfig.dialect,
  models: [process.cwd() + '/src/models']
})
