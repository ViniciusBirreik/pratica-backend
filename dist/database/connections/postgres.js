"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class Postgres {
    constructor() { }
    static async getInstance() {
        if (!Postgres.instance) {
            const postgres = new Postgres();
            Postgres.instance = await postgres.openConnection();
        }
        return Postgres.instance;
    }
    async openConnection() {
        try {
            return await (0, typeorm_1.createConnection)();
        }
        catch (error) {
            throw new Error('Erro ao conectar...');
        }
    }
}
exports.default = Postgres;
