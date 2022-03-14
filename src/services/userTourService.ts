import { pool } from "../config/config";
type UserTourData = {
  userId: string;
  tourId: string;
};

export const getUserTours = async () => {
  const res = await pool.query("Select * from usertours");
  return res.rows;
};

export const createuserTour = async (userTourData: UserTourData) => {
  await pool.query(
    `INSERT INTO usertours(userId,tourId,created_at) VALUES('${userTourData.userId}','${userTourData.tourId}',
      current_timestamp)`
  );
};

export const getTourByUserId = async (userId) => {
  const res = await pool.query(
    `Select * from usertours where userid=${userId}`
  );
  return res.rows;
};
