import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserTable1583624045237 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

       await queryRunner.createTable(new Table(
            {
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "email",
                        type: "string",
                        isUnique: true,
                    },
                    {
                        name: "name",
                        type: "string",
                    }
                ]
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
