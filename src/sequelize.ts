import { Sequelize } from "sequelize-typescript";

export const sequelize: Sequelize = new Sequelize("postgres", "postgres", "", {
  dialect: "postgres",
  host: "localhost",
});

export async function connect(dbConfig: Sequelize): Promise<void> {
  await dbConfig.authenticate();
}
