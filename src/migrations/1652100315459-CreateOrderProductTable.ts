import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrderProductTable1652100315459
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "order_products",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "productId",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "orderId",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  // Dentro do método down eu faço o contrário
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("order_products");
  }
}
