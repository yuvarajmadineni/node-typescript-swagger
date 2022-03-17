import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AllowNull,
  NotEmpty,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import User from "./User";
import { sequelize } from "../sequelize";

@Table({
  schema: "public",
  tableName: "reviews",
})
class Review extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    field: "reviewid",
  })
  reviewId: string;

  @BelongsTo(() => User, { foreignKey: "tourid" })
  tour: User;

  @BelongsTo(() => User, { foreignKey: "userid" })
  user: User;

  @NotEmpty
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    field: "rating",
  })
  rating: string;
}

sequelize.addModels([Review, User]);

export default Review;
