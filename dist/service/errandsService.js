"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errandsRepository_1 = __importDefault(require("../database/repositories/errandsRepository"));
class ErrandsService {
    async find() {
        const repository = new errandsRepository_1.default;
        const errands = await repository.find();
        return errands;
    }
    async findOne(errandsId) {
        const repository = new errandsRepository_1.default;
        const errands = await repository.findOne(errandsId);
        return errands;
    }
    async create(description, details, userId) {
        const repository = new errandsRepository_1.default;
        const errands = await repository.create(description, details, userId);
        return errands;
    }
    async update(errandsId, description, details, userId) {
        const repository = new errandsRepository_1.default;
        const errands = await repository.update(errandsId, description, details, userId);
        return errands;
    }
    async delete(errandsId) {
        const repository = new errandsRepository_1.default;
        await repository.delete(errandsId);
    }
}
exports.default = ErrandsService;
