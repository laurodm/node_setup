import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ status: 1, message: 'hello word' })
})

export default router
