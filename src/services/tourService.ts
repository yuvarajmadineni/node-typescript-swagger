import { pool } from "../config/config";
type TourData = {
  tourName: string;
  tourDifficulty: string;
  tourPlace: string;
};

export const getTours = async () => {
  const res = await pool.query("Select * from tours");
  return res.rows;
};

export const createTour = async (tourData: TourData) => {
  await pool.query(
    `INSERT INTO tours(tourName,tourPlace,tourDifficulty,created_at) VALUES('${tourData.tourName}','${tourData.tourPlace}','${tourData.tourDifficulty}',
      current_timestamp)`
  );
};

export const getTourById = async (tourId) => {
  const res = await pool.query(`Select * from tours where tourId=${tourId}`);
  return res.rows[0];
};

export const updateTour = async (tourId, tourData: TourData) => {
  const query = `update tours set "tourname"=$1,"tourplace"=$2,"tourdifficulty"=$3 where tourid=${tourId}`;
  await pool.query(query, [
    tourData.tourName,
    tourData.tourPlace,
    tourData.tourDifficulty,
  ]);
};

export const deleteTour = async (tourId) => {
  await pool.query(`Delete from tours where tourid=${tourId}`);
};
