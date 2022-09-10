"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = __importDefault(require("../database/repositories/userRepository"));
class UserService {
    async find() {
        const repository = new userRepository_1.default();
        const users = await repository.find();
        return users;
    }
    async findOne(userId) {
        const repository = new userRepository_1.default();
        const user = await repository.findOne(userId);
        return user;
    }
    async create(name, password) {
        const repository = new userRepository_1.default();
        const user = await repository.create(name, password);
        return user;
    }
    async update(userId, name, password) {
        const repository = new userRepository_1.default();
        const user = await repository.update(userId, name, password);
        return user;
    }
    async delete(userId) {
        const repository = new userRepository_1.default();
        await repository.delete(userId);
    }
}
exports.default = UserService;
