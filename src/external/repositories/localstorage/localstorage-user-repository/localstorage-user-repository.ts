import { UserRepository } from '@/usecases/ports/user-repository'
import fs from 'fs'
import path from 'path'

export class LocalstorageUserRepository implements UserRepository {
  getData () {
    return require('../db/users.json')
  }

  getAll () {
    const usersData = this.getData()
    return new Promise((resolve, reject) => {
      const users = usersData
      resolve(users)
    })
  }

  getOne (id: number) {
    const usersData = this.getData()
    return new Promise(resolve => {
      const user = usersData.find(u => u.id === id)
      resolve(user)
    })
  }

  insertOne (user) {
    const usersData = this.getData()
    return new Promise(resolve => {
      user.id = usersData.length + 1

      const newUsers = [...usersData, user]

      const file = path.join(__dirname, '../db/users.json')

      fs.writeFileSync(file, JSON.stringify(newUsers), 'utf8')

      resolve({ status: true, id: user.id })
    })
  }

  updateOne (id, data) {
    const usersData = this.getData()
    return new Promise(resolve => {
      const user = usersData.filter(u => u.id === id)
      const userIndex = usersData.findIndex(u => u.id === id)

      usersData[userIndex] = { ...user[0], ...data }

      const file = path.join(__dirname, '../db/users.json')

      fs.writeFileSync(file, JSON.stringify(usersData), 'utf8')

      resolve(true)
    })
  }

  deleteOne (id) {
    const usersData = this.getData()
    return new Promise(resolve => {
      const newUsers = usersData.filter(u => u.id !== id)

      const file = path.join(__dirname, '../db/users.json')

      fs.writeFileSync(file, JSON.stringify(newUsers), 'utf8')

      resolve(true)
    })
  }

  count () {
    const usersData = this.getData()
    return usersData.length
  }
}
