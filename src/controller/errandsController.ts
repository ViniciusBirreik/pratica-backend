import { Request, Response } from "express";
import ErrandsService from "../service/errandsService";

export default class ErrandsController {
    index = async (request: Request, response: Response) => {
        const service = new ErrandsService

        return response.json(await service.find())
    }

    show = async (request: Request, response: Response) => {
        const service = new ErrandsService
        const { id } = request.params

        return response.json(await service.findOne(parseInt(id)))
    }

    store = async (request: Request, response: Response) => {
        const service = new ErrandsService
        const { description, details, userId } = request.body

        return response.json(await service.create(description, details, userId))
    }

    update = async (request: Request, response: Response) => {
        const service = new ErrandsService
        const { id } = request.params
        const { description, details, userId } = request.body

        return response.json(await service.update(parseInt(id), description, details, userId))
    }

    delete = async (request: Request, response: Response) => {
        const service = new ErrandsService
        const { id } = request.params

        return response.json(await service.delete(parseInt(id)))
    }
}
