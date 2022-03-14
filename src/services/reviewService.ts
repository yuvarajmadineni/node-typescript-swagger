import { pool } from "../config/config";
import { review } from "../controllers/reviewController";
type ReviewData = {
  rating: string;
  tourId: string;
  userId: string;
};

export const getReviews = async () => {
  const res = await pool.query("Select * from reviews");
  return res.rows;
};

export const createReview = async (reviewData: ReviewData) => {
  await pool.query(
    `INSERT INTO reviews(userId,tourId,rating,created_at) VALUES('${reviewData.userId}','${reviewData.tourId}','${reviewData.rating}',
      current_timestamp)`
  );
};

export const getReviewById = async (reviewId) => {
  const res = await pool.query(
    `Select * from reviews where reviewId=${reviewId}`
  );
  return res.rows[0];
};

export const updateReview = async (reviewId, reviewData: ReviewData) => {
  const query = `update reviews set "userid"=$1,"tourid"=$2,"rating"=$3 where tourid=${reviewId}`;
  await pool.query(query, [
    reviewData.userId,
    reviewData.tourId,
    reviewData.rating,
  ]);
};

export const deleteReview = async (reviewId) => {
  await pool.query(`Delete from reviews where reviewid=${reviewId}`);
};
