import { NextFunction, Request, Response } from "express";
import { Operation } from "express-openapi";
import { getUserTours, createuserTour } from "../../services/userTourService";

export const GET: Operation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await getUserTours();
  res.status(200).json({
    status: "success",
    data: { userTours: result },
  });
};
export const POST: Operation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await createuserTour(req.body);
  res.status(200).json({
    status: "success",
  });
};

// NOTE: We could also use a YAML string here.
GET.apiDoc = {
  summary: "Returns userTours",
  // operationId: "getUsers",
  // parameters: [],
  tags: ["UserTours"],
  responses: {
    200: {
      description: "A list of usertours",
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: {
                  description: "usr",
                  type: "number",
                },
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
  summary: "Creates usertour",
  // operationId: "getUsers",
  // parameters: [],
  tags: ["UserTours"],
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
