import UserRepository from "../database/repositories/userRepository";

export default class UserService {
    async find() {
        const repository = new UserRepository()
        const users = await repository.find()

        return users
    }

    async findOne(userId: number) {
        const repository = new  UserRepository()
        const user = await repository.findOne(userId)

        return user
    }

    async create(name: string, password: string) {
        const repository = new UserRepository()
        const user = await repository.create(name, password)
        
        return user
    }

    async update(userId: number, name: string, password: string) {
        const repository = new UserRepository()
        const user = await repository.update(userId, name, password)

        return user
    }

    async delete(userId: number) {
        const repository = new UserRepository()

        await repository.delete(userId)
    }
}