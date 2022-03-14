import { NextFunction, Request, Response } from "express";
import { Operation } from "express-openapi";
import {
  deleteTour,
  getTourById,
  updateTour,
} from "../../../services/tourService";

export const GET: Operation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await getTourById(req.params.tourId);
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
  await updateTour(req.params.tourId, req.body);
  res.status(200).json({
    status: "success",
  });
};
export const DELETE: Operation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await deleteTour(req.params.tourId);
  res.status(200).json({
    status: "success",
  });
};

// NOTE: We could also use a YAML string here.
GET.apiDoc = {
  summary: "Returns tour by id",
  // operationId: "getUsers",
  // parameters: [],
  tags: ["Tours"],
  parameters: [
    {
      name: "tourId",
      description: "Id of tour",
      required: true,
      in: "path",
    },
  ],
  responses: {
    200: {
      description: "Get tour ",
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
    // default: {
    //   description: "An error occurred",
    //   schema: {
    //     additionalProperties: true,
    //   },
    // },
  },
};

PUT.apiDoc = {
  summary: "Updates tour",
  // operationId: "getUsers",
  // parameters: [],
  tags: ["Tours"],
  parameters: [
    {
      name: "tourId",
      description: "Id of tour",
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

// NOTE: We could also use a YAML string here.
DELETE.apiDoc = {
  summary: "Deletes tour",
  // operationId: "getUsers",
  // parameters: [],
  tags: ["Tours"],
  parameters: [
    {
      name: "tourId",
      description: "Id of tour",
      required: true,
      in: "path",
    },
  ],
  responses: {
    200: {
      description: "A list of tours",
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
    // default: {
    //   description: "An error occurred",
    //   schema: {
    //     additionalProperties: true,
    //   },
    // },
  },
};
