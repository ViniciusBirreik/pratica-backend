import express from 'express'
import cors from 'cors'
import Postgres from './database/connections/postgres'
import UserRoutes from './routers/userRouters'
import ErrandsRouters from './routers/errandsRouters'
import DocsRouters from './routers/docs'

export default class Application {
    private readonly app: express.Application

    constructor() {
        this.app = express()
    }

    get server() {
        return this.app
    }

    async init() {
        this.config()
        this.routers()
        await this.database()
    }

    //istambul ignore next
    start(port: number) {
        this.app.listen(port)
    }

    config() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: false}))
        this.app.use(cors())
    }

    routers() {
        this.app.use(new UserRoutes().init())
        this.app.use(new ErrandsRouters().init())
        this.app.use(new DocsRouters().init())
    }

    async database() {
        await Postgres.getInstance()
    }
}