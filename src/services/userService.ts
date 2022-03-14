import { pool } from "../config/config";
type UserData = {
  userName: string;
  userEmail: string;
  userMobileNumber: string;
};

export const getUsers = async () => {
  const res = await pool.query("Select * from users");
  return res.rows;
};

export const createUsers = async (userData: UserData) => {
  await pool.query(
    `INSERT INTO users(userName,userEmail,userMobileNumber,created_at) VALUES('${userData.userName}','${userData.userEmail}','${userData.userMobileNumber}',
      current_timestamp)`
  );
};

export const getUserById = async (userId) => {
  const res = await pool.query(`Select * from users where userId=${userId}`);
  return res.rows[0];
};

export const updateUser = async (userId, userData: UserData) => {
  const query = `update users set "username"=$1,"useremail"=$2,"usermobilenumber"=$3 where userid=${userId}`;
  await pool.query(query, [
    userData.userName,
    userData.userEmail,
    userData.userMobileNumber,
  ]);
};

export const deleteUser = async (userId) => {
  await pool.query(`Delete from users where userid=${userId}`);
};
