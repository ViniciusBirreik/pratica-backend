import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class User1661897569781 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
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
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user', true, true, true)
    }
}
