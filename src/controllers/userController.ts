export type User = {
  userId: number;
  userName: string;
  userEmail: string;
  userMobileNumber: string;
};

export const user: User[] = [
  {
    userId: 1,
    userName: "Rohit",
    userEmail: "user1@gmail.com",
    userMobileNumber: "2243424",
  },
];

const getUser = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

export { getUser };
