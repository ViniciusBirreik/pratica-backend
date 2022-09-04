"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const postgres_1 = __importDefault(require("./database/connections/postgres"));
const userRouters_1 = __importDefault(require("./routers/userRouters"));
const errandsRouters_1 = __importDefault(require("./routers/errandsRouters"));
class Application {
    constructor() {
        this.app = (0, express_1.default)();
    }
    get server() {
        return this.app;
    }
    async init() {
        this.config();
        this.routers();
        await this.database();
    }
    start(port) {
        this.app.listen(port);
    }
    config() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, cors_1.default)());
    }
    routers() {
        this.app.use(new userRouters_1.default().init());
        this.app.use(new errandsRouters_1.default().init());
    }
    async database() {
        await postgres_1.default.getInstance();
    }
}
exports.default = Application;
