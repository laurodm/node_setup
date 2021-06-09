import { LocalstorageUserRepository } from './localstorage-user-repository'

describe('User Repository', () => {
  const repository = new LocalstorageUserRepository()

  test('Get Users', async () => {
    const users = await repository.getAll()
    expect(users).toHaveLength(1)
  })

  test('Get One User', async () => {
    const user = await repository.getOne(1)
    expect(user).toEqual(expect.objectContaining({
      email: 'laurodamasceno@gmail.com'
    }))
  })

  test('Insert One User', async () => {
    const user = {
      username: 'jessica',
      password: '123456',
      email: 'jessica@gmail.com'
    }

    const result = await repository.insertOne(user)

    expect(result).toBe(true)
  })

  test('Update One User', async () => {
    setTimeout(async () => {
      const data = {
        password: '654321',
        email: 'lauro_@gmail.com'
      }

      const result = await repository.updateOne(1, data)

      expect(result).toBe(true)
    }, 500)
  })

  // test('Delete One User', async () => {
  //   const id = await repository.count() + 1
  //   const result = await repository.deleteOne(id)

  //   expect(result).toBe(true)
  // })
})
