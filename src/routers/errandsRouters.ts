import { Router } from 'express'
import ErrandsController from '../controller/errandsController'

export default class ErrandsRouters {
    init() {
        const routers = Router()
        const controller = new ErrandsController()

        routers.get('/errands',
                    controller.index
                    /*
                    #swagger.tags = ['ErrandsList']
                    #swagger.description = 'lista os recados'
                    #swagger.security = [{ Bearer: [] }]
                    #swagger.responses[200] = {
                        description: 'Success',
                        schema: [{ $ref: '#/definitions/Errands' }]
                    }
                    #swagger.responses[400] = {
                        description: 'comando inválido',
                    }
                    #swagger.responses[500] = {
                        description: 'Problema ao devolver sua solicitação',
                    }
                    */)
        routers.get('/errands/:id',
                    controller.show
                    /*
                    #swagger.tags = ['Errands']
                    #swagger.description = 'mostra um recado'
                    #swagger.security = [{ Bearer: [] }]
                    #swagger.responses[200] = {
                        description: 'Success',
                        schema: [{ $ref: '#/definitions/Errands' }]
                    }
                    #swagger.responses[400] = {
                        description: 'comando inválido',
                    }
                    #swagger.responses[500] = {
                        description: 'Problema ao devolver sua solicitação',
                    }
                    #swagger.parameters[id] = {
                        in: 'param',
                        description: 'recebe o id do recado',
                        required: true,
                        type: 'number'
                    }
                    */)
        routers.post('/errands',
                    controller.store
                    /*
                    #swagger.tags = ['Errands']
                    #swagger.description = 'cadastra um recado'
                    #swagger.security = [{ Bearer: [] }]
                    #swagger.responses[200] = {
                        description: 'Success',
                        schema: [{ $ref: '#/definitions/Errands' }]
                    }
                    #swagger.responses[400] = {
                        description: 'comando inválido',
                    }
                    #swagger.responses[500] = {
                        description: 'Problema ao devolver sua solicitação',
                    }
                    #swagger.parameters[description] = {
                        in: 'body',
                        description: 'recebe a descrição do recado',
                        required: true,
                        type: 'string'
                    }
                    #swagger.parameters[details] = {
                        in: 'body',
                        description: 'recebe o detalhe do recado',
                        required: true,
                        type: 'string'
                    }
                    #swagger.parameters[userId] = {
                        in: 'body',
                        description: 'recebe o id do usuário',
                        required: true,
                        type: 'number'
                    }
                    */)
        routers.put('/errands/:id',
                    controller.update
                    /*
                    #swagger.tags = ['Errands']
                    #swagger.description = 'edita um recado'
                    #swagger.security = [{ Bearer: [] }]
                    #swagger.responses[200] = {
                        description: 'Success',
                        schema: [{ $ref: '#/definitions/Errands' }]
                    }
                    #swagger.responses[400] = {
                        description: 'comando inválido',
                    }
                    #swagger.responses[500] = {
                        description: 'Problema ao devolver sua solicitação',
                    }
                    #swagger.parameters[errandsId] = {
                        in: 'param',
                        description: 'recebe o id do recado',
                        required: true,
                        type: 'string'
                    }
                    #swagger.parameters[description] = {
                        in: 'body',
                        description: 'recebe a descrição do recado',
                        required: true,
                        type: 'string'
                    }
                    #swagger.parameters[details] = {
                        in: 'body',
                        description: 'recebe o detalhe do recado',
                        required: true,
                        type: 'string'
                    }
                    #swagger.parameters[userId] = {
                        in: 'body',
                        description: 'recebe o id do usuário',
                        required: true,
                        type: 'number'
                    }
                    */)
        routers.delete('/errands/:id',
                        controller.delete
                        /*
                        #swagger.tags = ['Errands']
                        #swagger.description = 'deleta um recado'
                        #swagger.security = [{ Bearer: [] }]
                        #swagger.responses[200] = {
                            description: 'Success',
                            schema: [{ $ref: '#/definitions/Errands' }]
                        }
                        #swagger.responses[400] = {
                            description: 'comando inválido',
                        }
                        #swagger.responses[500] = {
                            description: 'Problema ao devolver sua solicitação',
                        }
                        #swagger.parameters[errandsId] = {
                            in: 'param',
                            description: 'recebe o id do recado',
                            required: true,
                            type: 'number'
                        }
                        */)

        return routers
    }
}