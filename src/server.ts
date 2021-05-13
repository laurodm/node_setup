import express, { request } from 'express'
import { teste } from '@/controllers/teste'

const app = express()

app.get('/', (request, response) => {

    return response.json({ message: 'Hello World!' })
})

app.listen(3333)