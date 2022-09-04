"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userEntity_1 = __importDefault(require("../entities/userEntity"));
class UserRepository {
    async find() {
        const user = await userEntity_1.default.find();
        return user;
    }
    async findOne(userId) {
        const user = await userEntity_1.default.findOne(userId);
        return user;
    }
    async update(userId, name, password) {
        const user = await userEntity_1.default.findOne(userId);
        if (user) {
            user.name = name;
            user.password = password;
            await user?.save();
        }
    }
    async create(name, password) {
        const user = new userEntity_1.default(name, password);
        await user.save();
        return user;
    }
    async delete(userId) {
        await userEntity_1.default.delete(userId);
    }
}
exports.default = UserRepository;
