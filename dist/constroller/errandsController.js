"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errandsService_1 = __importDefault(require("../service/errandsService"));
class ErrandsControler {
    constructor() {
        this.index = async (request, response) => {
            const service = new errandsService_1.default;
            return response.json(await service.find());
        };
        this.show = async (request, response) => {
            const service = new errandsService_1.default;
            const { id } = request.params;
            return response.json(await service.findOne(parseInt(id)));
        };
        this.store = async (request, response) => {
            const service = new errandsService_1.default;
            const { description, details, userId } = request.body;
            return response.json(await service.create(description, details, userId));
        };
        this.update = async (request, response) => {
            const service = new errandsService_1.default;
            const { id } = request.params;
            const { description, details, userId } = request.body;
            return response.json(await service.update(parseInt(id), description, details, userId));
        };
        this.delete = async (request, response) => {
            const service = new errandsService_1.default;
            const { id } = request.params;
            return response.json(await service.delete(parseInt(id)));
        };
    }
}
exports.default = ErrandsControler;
