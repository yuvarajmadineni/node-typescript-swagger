import { NextFunction, Request, Response } from "express";
import { Operation } from "express-openapi";
import { getTourByUserId } from "../../../services/userTourService";

export const GET: Operation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await getTourByUserId(req.params.userId);
  res.status(200).json({
    status: "success",
    data: {
      usertour: result,
    },
  });
};

GET.apiDoc = {
  summary: "Returns tour for an user",
  // operationId: "getUsers",
  // parameters: [],
  tags: ["UserTours"],
  parameters: [
    {
      name: "userId",
      description: "Id of user",
      required: true,
      in: "path",
    },
  ],
  responses: {
    200: {
      description: "A list of tours by user",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              userId: {
                description: "usr",
                type: "number",
              },
              tourId: {
                description: "usr",
                type: "number",
              },
            },
            // required: ["userId", "userName", "userEmail", "userMobileNumber"],
          },
        },
      },
    },
    // default: {
    //   description: "An error occurred",
    //   schema: {
    //     additionalProperties: true,
    //   },
    // },
  },
};
