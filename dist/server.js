"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const application = new app_1.default();
const port = process.env.PORT ? Number(process.env.PORT) : 8080;
dotenv_1.default.config();
application.init().then(() => {
    application.start(port);
});
