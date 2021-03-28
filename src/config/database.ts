module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 15432,
  username: 'postgres',
  password: 'root',
  database: 'node-gcalendar',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
