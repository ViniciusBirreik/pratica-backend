import ErrandsRepository from "../database/repositories/errandsRepository";

export default class ErrandsService {
    async find() {
        const repository = new ErrandsRepository

        const errands = await repository.find()

        return errands
    }

    async findOne(errandsId: number) {
        const repository = new ErrandsRepository

        const errands = await repository.findOne(errandsId)
        return errands
    }

    async create(description: string, details: string, userId: number) {
        const repository = new ErrandsRepository

        const errands = await repository.create(description, details, userId)
        return errands
    }

    async update(errandsId: number, description: string, details: string, userId: number) {
        const repository = new ErrandsRepository

        const errands = await repository.update(errandsId, description, details, userId)
        return errands
    }

    async delete(errandsId: number) {
        const repository = new ErrandsRepository

        await repository.delete(errandsId)
    }
}