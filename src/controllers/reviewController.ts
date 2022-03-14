type Review = {
  reviewId: number;
  rating: number;
  userId: string;
  tourId: string;
};

export const review: Review[] = [
  {
    reviewId: 1,
    tourId: "1",
    userId: "1",
    rating: 4.5,
  },
];

export const getTours = (req: any, res: any, next: any) => {
  res.status(200).json({
    status: "success",
    data: {
      review,
    },
  });
};
