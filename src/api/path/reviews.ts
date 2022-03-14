import { NextFunction, Request, Response } from "express";
import { Operation } from "express-openapi";
import { review } from "../../controllers/reviewController";
import { pool } from "../../config/config";
import { QueryResult } from "pg";
import { createReview } from "../../services/reviewService";

export const GET: Operation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result: QueryResult = await pool.query("Select * from reviews");
  res.status(200).json({
    status: "success",
    data: {
      reviews: result.rows,
    },
  });
};
export const POST: Operation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await createReview(req.body);
  res.status(200).json({
    status: "success",
  });
};

// NOTE: We could also use a YAML string here.
GET.apiDoc = {
  summary: "Returns reviews",
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
                reviewId: {
                  description: "usr",
                  type: "number",
                },
                tourId: {
                  description: "usr",
                  type: "number",
                },
                userId: {
                  description: "usr",
                  type: "number",
                },
                rating: {
                  description: "usr",
                  type: "number",
                },
              },
              // required: ["userId", "userName", "userEmail", "userMobileNumber"],
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

POST.apiDoc = {
  summary: "Creates review",
  // operationId: "getUsers",
  // parameters: [],
  tags: ["Reviews"],
  requestBody: {
    // required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            tourId: {
              description: "usr",
              type: "number",
            },
            userId: {
              description: "usr",
              type: "number",
            },
            rating: {
              description: "usr",
              type: "number",
            },
          },
          // required: ["userId", "userName", "userEmail", "userMobileNumber"],
        },
      },
    },
  },
  responses: {
    200: {
      description: "created",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              status: {
                type: "string",
              },
            },
            // required: ["userId", "userName", "userEmail", "userMobileNumber"],
          },
        },
      },
    },
  },
};
