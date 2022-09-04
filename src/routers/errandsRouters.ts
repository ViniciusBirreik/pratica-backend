import { Router } from 'express'
import ErrandsControler from '../constroller/errandsController'

export default class ErrandsRouters {
    init() {
        const routers = Router()
        const controller = new ErrandsControler()

        routers.get('/errands', controller.index)
        routers.get('/errands/:id', controller.show)
        routers.post('/errands', controller.store)
        routers.put('/errands/:id', controller.update)
        routers.delete('/errands/:id', controller.delete)

        return routers
    }
}