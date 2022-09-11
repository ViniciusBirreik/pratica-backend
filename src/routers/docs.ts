import { Router } from "express";
import swaggerUi from "swagger-ui-express"
import swaggerFile from "../swagger-documentation.json"

export default class DocsRouters {
    init() {
        const routers = Router()

        routers.use('/docs', swaggerUi.serve,
                            swaggerUi.setup(swaggerFile))
        
        return routers
    }
}