import app from './src/app'
import { sequelize } from './src/database/'

require('dotenv').config()

const port = process.env.PORT

app.listen(port, () => {
  console.log(`App is listening to port ${port}`)
  console.log(`App: http://localhost:${port}`)

  sequelize
    .authenticate()
    .then(async () => {
      console.log('Database connect successful')

      try {
        await sequelize.sync({ force: false })
      } catch (error) {
        console.log(error.message)
      }
    })
    .catch((e: any) => {
      console.log(e.message)
    })
})
