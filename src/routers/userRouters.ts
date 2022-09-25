import { Router } from "express";
import UserController from "../controller/userController";

export default class UserRoutes {
    init() {
        const routers = Router()
        const controller = new UserController

        routers.get('/user', 
                    controller.index
                    /*
                    #swagger.tags = ['UserList']
                    #swagger.description = 'lista os usuários'
                    #swagger.security = [{ Bearer: [] }]
                    #swagger.responses[200] = {
                        description: 'Success',
                        schema: [{ $ref: '#/definitions/User' }]
                    }
                    #swagger.responses[400] = {
                        description: 'comando inválido',
                    }
                    #swagger.responses[500] = {
                        description: 'Problema ao devolver sua solicitação',
                    }
                    */)
        routers.get('/user/:id',
                    controller.show
                    /*
                    #swagger.tags = ['User']
                    #swagger.description = 'mostra um usuário'
                    #swagger.security = [{ Bearer: [] }]
                    #swagger.responses[200] = {
                        description: 'Success',
                        schema: [{ $ref: '#/definitions/User' }]
                    }
                    #swagger.responses[400] = {
                        description: 'comando inválido',
                    }
                    #swagger.responses[500] = {
                        description: 'Problema ao devolver sua solicitação',
                    }
                    #swagger.parameters['id'] = {
                        in: 'param',
                        description: 'id do usuário',
                        required: true,
                        type: 'string'
                    }
                    */)
        routers.post('/user',
                    controller.store
                    /*
                    #swagger.tags = ['User']
                    #swagger.description = 'cadastra um usuário'
                    #swagger.responses[200] = {
                        description: 'Success',
                        schema: [{ $ref: '#/definitions/User' }]
                    }
                    #swagger.responses[400] = {
                        description: 'comando inválido',
                    }
                    #swagger.responses[500] = {
                        description: 'Problema ao devolver sua solicitação',
                    }
                    #swagger.parameters['name'] = {
                        in: 'body',
                        description: 'nome do usuário',
                        required: true,
                        type: 'string'
                    }
                    #swagger.parameters['password'] = {
                        in: 'body',
                        description: 'senha do usuário',
                        required: true,
                        type: 'string'
                    }
                    */)
        routers.put('/user/:id',
                    controller.update
                    /*
                    #swagger.tags = ['User']
                    #swagger.description = 'atualiza um usuário'
                    #swagger.security = [{ Bearer: [] }]
                    #swagger.responses[200] = {
                        description: 'Success',
                        schema: [{ $ref: '#/definitions/User' }]
                    }
                    #swagger.responses[400] = {
                        description: 'comando inválido',
                    }
                    #swagger.responses[500] = {
                        description: 'Problema ao devolver sua solicitação',
                    }
                    #swagger.parameters['id'] = {
                        in: 'param',
                        description: 'id do usuário',
                        required: true,
                        type: 'string'
                    }
                    #swagger.parameters['name'] = {
                        in: 'body',
                        description: 'nome do usuário',
                        required: true,
                        type: 'string'
                    }
                    #swagger.parameters['password'] = {
                        in: 'body',
                        description: 'senha do usuário',
                        required: true,
                        type: 'string'
                    }
                    */)
        routers.delete('/user/:id',
                        controller.delete
                        /*
                        #swagger.tags = ['User']
                        #swagger.description = 'deleta um usuário'
                        #swagger.security = [{ Bearer: [] }]
                        #swagger.responses[200] = {
                            description: 'Success',
                            schema: [{ $ref: '#/definitions/User' }]
                        }
                        #swagger.responses[400] = {
                        description: 'comando inválido',
                        }
                        #swagger.responses[500] = {
                            description: 'Problema ao devolver sua solicitação',
                        }
                        #swagger.parameters['id'] = {
                            in: 'param',
                            description: 'id do usuário',
                            required: true,
                            type: 'string'
                        }
                        */)

        return routers
    }
}