import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import CreateProductService from "../products/CreateProduct.service";

describe("Create a Product", () => {
  let connection: DataSource;

  // Aqui dentro, nos conectamos com o banco de dados antes dos testes
  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during data source initialization", err)
      );
  });

  // Aqui dentro, limpamos todos os dados da conexao
  afterAll(async () => {
    await connection.destroy();
  });

  test("Should be able to create a new product", async () => {
    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      title: "Hamburguer",
      description: "Hamburguer delicioso da casa",
      price: 20,
      img_url:
        "https://www.sabornamesa.com.br/media/k2/items/cache/bf26253d7b8f171dddb155f84ce1d562_XL.jpg",
    });

    expect(product).toHaveProperty("id");
    expect(product).toBeTruthy();
  });
});
