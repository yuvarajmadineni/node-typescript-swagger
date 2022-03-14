import { NextFunction, Request, Response } from "express";
import { Operation } from "express-openapi";
import {
  deleteUser,
  getUserById,
  updateUser,
} from "../../../services/userService";

export const GET: Operation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await getUserById(req.params.userId);
  res.status(200).json({
    status: "success",
    data: {
      user: result,
    },
  });
};
export const PUT: Operation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await updateUser(req.params.userId, req.body);
  res.status(200).json({
    status: "success",
  });
};
export const DELETE: Operation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await deleteUser(req.params.userId);
  res.status(200).json({
    status: "success",
  });
};

// NOTE: We could also use a YAML string here.
GET.apiDoc = {
  summary: "Returns user by id",
  // operationId: "getUsers",
  // parameters: [],
  tags: ["Users"],
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
      description: "A list of users",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              userId: {
                description: "usr",
                type: "number",
              },
              userName: {
                description: "usr",
                type: "string",
              },
              userEmail: {
                description: "usr",
                type: "string",
              },
              userMobileNumber: {
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
  summary: "Updates user",
  // operationId: "getUsers",
  // parameters: [],
  tags: ["Users"],
  parameters: [
    {
      name: "userId",
      description: "Id of user",
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
            userName: {
              description: "usr",
              type: "string",
            },
            userEmail: {
              description: "usr",
              type: "string",
            },
            userMobileNumber: {
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
              userId: {
                description: "usr",
                type: "number",
              },
              userName: {
                description: "usr",
                type: "string",
              },
              userEmail: {
                description: "usr",
                type: "string",
              },
              userMobileNumber: {
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
  summary: "Deletes user",
  // operationId: "getUsers",
  // parameters: [],
  tags: ["Users"],
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
      description: "A list of users",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              userId: {
                description: "usr",
                type: "number",
              },
              userName: {
                description: "usr",
                type: "string",
              },
              userEmail: {
                description: "usr",
                type: "string",
              },
              userMobileNumber: {
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
