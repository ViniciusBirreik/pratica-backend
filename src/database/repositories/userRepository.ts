import UserEntity from "../entities/userEntity";

export default class UserRepository {
    async find() {
        const user = await UserEntity.find()

        return user
    }

    async findOne(userId: number) {
        const user = await UserEntity.findOne(userId)

        return user
    }

    async update(userId: number, name: string, password: string) {
        const user = await UserEntity.findOne(userId)
        
        if(user) {
            user.name = name
            user.password = password

            await user?.save()
        }
    }

    async create(name: string, password: string) {
        const user = new UserEntity(
            name,
            password
        )

        await user.save()

        return user
    }

    async delete(userId: number) {
        await UserEntity.delete(userId)
    }
}