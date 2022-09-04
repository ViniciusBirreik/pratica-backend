"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const errandsController_1 = __importDefault(require("../constroller/errandsController"));
class ErrandsRouters {
    init() {
        const routers = (0, express_1.Router)();
        const controller = new errandsController_1.default();
        routers.get('/errands', controller.index);
        routers.get('/errands/:id', controller.show);
        routers.post('/errands', controller.store);
        routers.put('/errands/:id', controller.update);
        routers.delete('/errands/:id', controller.delete);
        return routers;
    }
}
exports.default = ErrandsRouters;
