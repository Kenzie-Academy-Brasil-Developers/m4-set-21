import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from "supertest";
import app from "../../app";

describe("Create an user - API ROUTE", () => {
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

  test("Should be able to create a new user in the API", async () => {
    const userData = {
      email: "johndoe@gmail.com",
      name: "John Doe",
      password: "123456",
    };

    const response = await request(app).post("/users").send(userData);

    expect(response.status).toBe(201);

    expect(response.body).toHaveProperty("id");
  });
});
