import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AddReferencesOnOrderProductsTable1652100842776
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "order_products",
      new TableForeignKey({
        name: "OrdersFK", // NOME DA CONSTRAINT
        columnNames: ["order_id"], // COLUNA QUE CONTEM A REFERENCIA
        referencedColumnNames: ["id"], // COLUNA QUE SERÁ REFERENCIADA
        referencedTableName: "orders", // TABELA REFERENCIADA
        onDelete: "CASCADE", // TATICA DE EXCLUSAO
        onUpdate: "CASCADE", // TATICA DE ATUALIZAÇÃO
      })
    );

    await queryRunner.createForeignKey(
      "order_products",
      new TableForeignKey({
        name: "ProductsFK", // NOME DA CONSTRAINT
        columnNames: ["product_id"], // COLUNA QUE CONTEM A REFERENCIA
        referencedColumnNames: ["id"], // COLUNA QUE SERÁ REFERENCIADA
        referencedTableName: "products", // TABELA REFERENCIADA
        onDelete: "SET NULL", // TATICA DE EXCLUSAO
        onUpdate: "CASCADE", // TATICA DE ATUALIZAÇÃO
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("order_products", "OrdersFK");
    await queryRunner.dropForeignKey("order_products", "ProductsFK");
  }
}
