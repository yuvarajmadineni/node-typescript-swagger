import { NextFunction, Request, Response } from "express";
import { Operation } from "express-openapi";
import { user, User } from "../../controllers/userController";
import { createUsers, getUsers } from "../../services/userService";

export const GET: Operation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result: User[] = await getUsers();
  res.status(200).json({
    status: "success",
    data: {
      users: result,
    },
  });
};
export const POST: Operation = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userData = req.body;
  await createUsers(userData);

  res.status(200).json({
    status: "success",
  });
};

// NOTE: We could also use a YAML string here.
GET.apiDoc = {
  summary: "Returns users",
  // operationId: "getUsers",
  // parameters: [],
  tags: ["Users"],
  responses: {
    200: {
      description: "A list of users",
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: {
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
    // default: {
    //   description: "An error occurred",
    //   schema: {
    //     additionalProperties: true,
    //   },
    // },
  },
};

POST.apiDoc = {
  summary: "Creates user",
  // operationId: "getUsers",
  // parameters: [],
  tags: ["Users"],
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
