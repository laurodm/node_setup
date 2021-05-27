// (async function () {
//   const app = (await import('./main/config/app')).default
//   app.listen(process.env.PORT || 5000, () => {
//     console.log(`Server running at http://localhost:${process.env.PORT}`)
//   })
// })()

const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database(':memory', (err) => {
  if (err) {
    return console.error(err.message)
  }
  console.log('Connected to the in-memory SQlite database.')
})

db.close((err) => {
  if (err) {
    return console.error(err.message)
  }
  console.log('Close the database connection.')
})
