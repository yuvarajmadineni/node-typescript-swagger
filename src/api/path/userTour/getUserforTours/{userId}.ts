import { NextFunction, Request, Response } from "express";
import { Operation } from "express-openapi";
import { getToursforUser } from "../../../../services/userTourService";

export const GET: Operation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.params);
  const result = await getToursforUser(req.params.userId);

  res.status(200).json({
    status: "success",
    data: {
      usertour: result,
    },
  });
};

GET.apiDoc = {
  summary: "Returns tourname,username for an usertour",
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
                description: "userid of usertour",
                type: "number",
              },
              tourName: {
                description: "tourname of usertour",
                type: "string",
              },
              userName: {
                description: "username for given tour",
                type: "string",
              },
            },
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
