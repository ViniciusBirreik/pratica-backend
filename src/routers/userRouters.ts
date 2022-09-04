import { Router } from "express";
import UserController from "../constroller/userController";

export default class UserRoutes {
    init() {
        const routers = Router()
        const controller = new UserController

        routers.get('/user', controller.index)
        routers.get('/user/:id', controller.show)
        routers.post('/user', controller.store)
        routers.put('/user/:id', controller.update)
        routers.delete('/user/:id', controller.delete)

        return routers
    }
}