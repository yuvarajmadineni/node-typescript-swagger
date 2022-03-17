import { NextFunction, Request, Response } from "express";
import { Operation } from "express-openapi";
import { getRatingsGreaterThan4 } from "../../../services/reviewService";

export const GET: Operation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await getRatingsGreaterThan4();
  res.status(200).json({
    status: "success",
    data: {
      reviews: result,
    },
  });
};

// NOTE: We could also use a YAML string here.
GET.apiDoc = {
  summary: "Returns rating greater than 4",
  // operationId: "getUsers",
  // parameters: [],
  tags: ["Reviews"],
  responses: {
    200: {
      description: "A list of reviews",
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: {
              type: "object",
              properties: {
                userId: {
                  description: "usrid  of review",
                  type: "number",
                },
                userName: {
                  description: "username of review",
                  type: "string",
                },
                rating: {
                  description: "rating of tour",
                  type: "number",
                },
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
