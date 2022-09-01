import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class UserErrands1661897622404 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
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
                new TableForeignKey({
                    referencedTableName: 'user',
                    referencedColumnNames: ['id'],
                    columnNames: ['user_id']
                })
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('errands', true, true, true)
    }
}
