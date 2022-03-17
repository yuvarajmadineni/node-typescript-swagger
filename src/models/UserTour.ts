import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { sequelize } from "../sequelize";
import Tour from "./Tour";
import User from "./User";

@Table
class UserTour extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    field: "userid",
  })
  userTourId: string;

  @ForeignKey(() => Tour)
  tourId: string;

  @ForeignKey(() => User)
  userId: string;

  @BelongsTo(() => Tour)
  tour: Tour;

  @BelongsTo(() => User)
  user: User;
}

sequelize.addModels([UserTour, User, Tour]);

export default UserTour;
