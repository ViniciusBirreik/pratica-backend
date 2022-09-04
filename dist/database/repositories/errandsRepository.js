"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errandsEntity_1 = require("../entities/errandsEntity");
class ErrandsRepository {
    async find() {
        const errands = await errandsEntity_1.ErrandsEntity.find();
        return errands;
    }
    async findOne(userId) {
        const errands = await errandsEntity_1.ErrandsEntity.findOne(userId);
        return errands;
    }
    async update(errandsId, description, details, userId) {
        const errands = await errandsEntity_1.ErrandsEntity.findOne(errandsId);
        if (errands) {
            errands.description = description;
            errands.details = details;
            errands.userId = userId;
            await errands?.save();
        }
        return errands;
    }
    async create(description, details, userId) {
        const errands = new errandsEntity_1.ErrandsEntity(description, details, userId);
        await errands.save();
    }
    async delete(errandsId) {
        await errandsEntity_1.ErrandsEntity.delete(errandsId);
    }
}
exports.default = ErrandsRepository;
