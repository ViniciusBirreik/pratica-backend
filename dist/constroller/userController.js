"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
class UserController {
    constructor() {
        this.index = async (request, response) => {
            const service = new userService_1.default;
            return response.json(await service.find());
        };
        this.show = async (request, response) => {
            const service = new userService_1.default;
            const { id } = request.params;
            return response.json(service.findOne(parseInt(id)));
        };
        this.store = async (request, response) => {
            const service = new userService_1.default;
            const { name, password } = request.body;
            return response.json(service.create(name, password));
        };
        this.update = async (request, response) => {
            const service = new userService_1.default;
            const { id } = request.params;
            const { name, password } = request.body;
            return response.json(service.update(parseInt(id), name, password));
        };
        this.delete = async (request, response) => {
            const service = new userService_1.default;
            const { id } = request.params;
            await service.delete(parseInt(id));
            return response.sendStatus(204);
        };
    }
}
exports.default = UserController;
