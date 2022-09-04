"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../constroller/userController"));
class UserRoutes {
    init() {
        const routers = (0, express_1.Router)();
        const controller = new userController_1.default;
        routers.get('/user', controller.index);
        routers.get('/user/:id', controller.show);
        routers.post('/user', controller.store);
        routers.put('/user/:id', controller.update);
        routers.delete('/user/:id', controller.delete);
        return routers;
    }
}
exports.default = UserRoutes;
