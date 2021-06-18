import express from 'express'

const router = express.Router()

router.get('/user', (req, res) => {
  res.json({ status: 1 })
})

export default router
