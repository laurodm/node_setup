export interface UserRepository {
  getAll: () => Promise<any>
  getOne: (id: number) => Promise<any>
  insertOne: (user: any) => Promise<any>
  updateOne: (id: number, data: any) => Promise<any>
  deleteOne: (id: number) => Promise<any>
}
