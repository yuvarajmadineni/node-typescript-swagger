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
class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    field: "userid",
  })
  id: string;

  @NotEmpty
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    field: "username",
  })
  userName: string;

  @NotEmpty
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    field: "useremail",
  })
  userEmail: string;

  @NotEmpty
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    field: "usermobilenumber",
  })
  userMobileNumber: string;
}

sequelize.addModels([User]);

export default User;
