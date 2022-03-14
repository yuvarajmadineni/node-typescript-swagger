type Tour = {
  tourId: number;
  tourName: string;
  tourPlace: string;
  tourDifficulty: string;
};

export const tour: Tour[] = [
  {
    tourId: 1,
    tourName: "Forest Tour",
    tourPlace: "California",
    tourDifficulty: "Medium",
  },
];

export const getTours = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};
