"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserErrands1661897622404 = void 0;
const typeorm_1 = require("typeorm");
class UserErrands1661897622404 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'errands',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isGenerated: true,
                    isNullable: false
                },
                {
                    name: 'description',
                    type: 'varchar',
                    length: '150',
                    isNullable: false,
                },
                {
                    name: 'details',
                    type: 'varchar',
                    length: '150',
                    isNullable: false
                },
                {
                    name: 'user_id',
                    type: 'int',
                    isNullable: false
                }
            ],
            foreignKeys: [
                new typeorm_1.TableForeignKey({
                    referencedTableName: 'user',
                    referencedColumnNames: ['id'],
                    columnNames: ['user_id']
                })
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('errands', true, true, true);
    }
}
exports.UserErrands1661897622404 = UserErrands1661897622404;
