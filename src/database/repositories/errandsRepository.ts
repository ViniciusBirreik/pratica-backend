import { ErrandsEntity } from "../entities/errandsEntity";

export default class ErrandsRepository {
    async find() {
        const errands = await ErrandsEntity.find()

        return errands
    }

    async findOne(userId: number) {
        const errands = await ErrandsEntity.findOne(userId)

        return errands
    }

    async update(errandsId: number, description: string, details: string, userId: number) {
        const errands = await ErrandsEntity.findOne(errandsId)

        if(errands) {
            errands.description = description
            errands.details = details
            errands.userId = userId

            await errands?.save()
        }

        return errands
    }

    async create(description: string, details: string, userId: number) {
        const errands = new ErrandsEntity(description, details, userId)

        await errands.save()
    }

    async delete(errandsId: number) {
        await ErrandsEntity.delete(errandsId)
    }

}