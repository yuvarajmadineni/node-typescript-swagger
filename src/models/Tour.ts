import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AllowNull,
  NotEmpty,
} from "sequelize-typescript";
import { sequelize } from "../sequelize";

@Table
class Tour extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    field: "tourid",
  })
  tourId: string;

  @NotEmpty
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    field: "tourname",
  })
  tourName: string;

  @NotEmpty
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    field: "tourplace",
  })
  tourPlace: string;

  @NotEmpty
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    field: "tourdifficulty",
  })
  tourDifficulty: string;
}

sequelize.addModels([Tour]);

export default Tour;
