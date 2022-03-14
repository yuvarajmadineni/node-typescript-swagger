import { NextFunction, Request, Response } from "express";
import { Operation } from "express-openapi";
import {
  deleteReview,
  getReviewById,
  updateReview,
} from "../../../services/reviewService";

export const GET: Operation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await getReviewById(req.params.reviewId);
  res.status(200).json({
    status: "success",
    data: {
      tour: result,
    },
  });
};
export const PUT: Operation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await updateReview(req.params.reviewId, req.body);
  res.status(200).json({
    status: "success",
  });
};
export const DELETE: Operation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await deleteReview(req.params.reviewId);
  res.status(200).json({
    status: "success",
  });
};

// NOTE: We could also use a YAML string here.
GET.apiDoc = {
  summary: "Returns review by id",
  // operationId: "getUsers",
  // parameters: [],
  tags: ["Reviews"],
  parameters: [
    {
      name: "reviewId",
      description: "Id of review",
      required: true,
      in: "path",
    },
  ],
  responses: {
    200: {
      description: "Get review ",
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
    // default: {
    //   description: "An error occurred",
    //   schema: {
    //     additionalProperties: true,
    //   },
    // },
  },
};

PUT.apiDoc = {
  summary: "Updates review",
  // operationId: "getUsers",
  // parameters: [],
  tags: ["Reviews"],
  parameters: [
    {
      name: "reviewId",
      description: "Id of review",
      required: true,
      in: "path",
    },
  ],
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
};

// NOTE: We could also use a YAML string here.
DELETE.apiDoc = {
  summary: "Deletes review",
  // operationId: "getUsers",
  // parameters: [],
  tags: ["Reviews"],
  parameters: [
    {
      name: "reviewId",
      description: "Id of review",
      required: true,
      in: "path",
    },
  ],
  responses: {
    200: {
      description: "Deletes review by id",
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
    // default: {
    //   description: "An error occurred",
    //   schema: {
    //     additionalProperties: true,
    //   },
    // },
  },
};
