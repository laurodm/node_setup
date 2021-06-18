import express from 'express'
import fs from 'fs'

const router = express.Router()

fs.readdir('./src/routes', (error, files) => {
  if (error) console.log(error)
  files.forEach(file => {
    if (file === 'index.ts') return
    const route = require(`./${file}`)
    router.use(route.default)
  })
})

export default router
