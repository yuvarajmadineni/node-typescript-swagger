import { Response, Request, NextFunction } from "express";
import { QueryResult } from "pg";
import { Operation } from "express-openapi";
import { tour } from "../../controllers/tourController";
import { pool } from "../../config/config";
import { createTour } from "../../services/tourService";

export const GET: Operation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result: QueryResult = await pool.query("Select * from tours");
  res.status(200).json({
    status: "success",
    data: {
      tours: result.rows,
    },
  });
};

export const POST: Operation = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const tourData = req.body;
  await createTour(tourData);

  res.status(200).json({
    status: "success",
  });
};

// NOTE: We could also use a YAML string here.
GET.apiDoc = {
  summary: "Returns Tours",
  // operationId: "getUsers",
  // parameters: [],
  tags: ["Tours"],
  responses: {
    200: {
      description: "A list of tours",
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: {
              type: "object",
              properties: {
                tourId: {
                  description: "usr",
                  type: "number",
                },
                tourName: {
                  description: "usr",
                  type: "string",
                },
                tourPlace: {
                  description: "usr",
                  type: "string",
                },
                tourDifficulty: {
                  description: "usr",
                  type: "string",
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
  summary: "Creates tour",
  // operationId: "getUsers",
  // parameters: [],
  tags: ["Tours"],
  requestBody: {
    // required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            tourName: {
              description: "usr",
              type: "string",
            },
            tourPlace: {
              description: "usr",
              type: "string",
            },
            tourDifficulty: {
              description: "usr",
              type: "string",
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
              tourName: {
                description: "usr",
                type: "string",
              },
              tourPlace: {
                description: "usr",
                type: "string",
              },
              tourDifficulty: {
                description: "usr",
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
