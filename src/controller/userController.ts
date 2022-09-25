import { Request, Response } from "express";
import UserService from "../service/userService";

export default class UserController {
    index = async (request: Request, response: Response) => {
        const service = new UserService

        return response.json(await service.find())
    }

    show = async (request: Request, response: Response) => {
        const service = new UserService
        const { id } = request.params

        return response.json(service.findOne(parseInt(id)))
    }

    store = async (request: Request, response: Response) => {
        const service = new UserService
        const { name, password } = request.body
        const user = service.create(name, password)

        return response.json(user)
    }

    update = async (request: Request, response: Response) => {
        const service = new UserService
        const { id } = request.params
        const { name, password } = request.body

        return response.json(service.update(parseInt(id), name, password))
    }

    delete = async (request: Request, response: Response) => {
        const service = new UserService
        const { id } = request.params

        await service.delete(parseInt(id))
        return response.sendStatus(204)
    }
}