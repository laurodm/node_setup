import express from 'express'
import Teste from '@/controllers/teste'

const app = express()

app.get('/', (request, response) => {
  const teste = new Teste(2)
  teste.run()
  return response.json({ message: 'Hello World' })
})

app.listen(3333)
