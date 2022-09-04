"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User1661897569781 = void 0;
const typeorm_1 = require("typeorm");
class User1661897569781 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isGenerated: true,
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '150',
                    isNullable: false
                },
                {
                    name: 'password',
                    type: 'varchar',
                    length: '100',
                    isNullable: false
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('user', true, true, true);
    }
}
exports.User1661897569781 = User1661897569781;
