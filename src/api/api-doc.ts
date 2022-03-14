import { OpenAPIV3 } from "openapi-types";

const apiDoc: OpenAPIV3.Document = {
  openapi: "3.0.1",
  info: {
    title: "Tourist API",
    version: "1.0.0",
  },
  tags: [
    { name: "Users", description: "User operations" },
    { name: "Tours", description: "TourOperations" },
    { name: "Reviews", description: "Review Operations" },
    { name: "UserTours", description: "User Tour Operations" },
  ],
  paths: {},
};

export { apiDoc };
//query and path variables
