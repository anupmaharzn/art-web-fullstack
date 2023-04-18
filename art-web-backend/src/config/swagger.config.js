const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ART-WEB-APP API with Swagger",
      version: "0.1.0",
      description:
        "This is a ART-WEB-APP application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      // contact: {
      //   name: "LogRocket",
      //   url: "https://logrocket.com",
      //   email: "info@email.com",
      // },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          description:
            "JWT Authorization header using bearer schema (Example:'Bearer asdflkjasdf')",
          type: "apiKey",
          name: "Authorization",
          in: "header",
        },
      },
    },
    servers: [
      {
        url: "http://localhost:5000/api/v1",
      },
    ],
  },
  apis: ["src/routes/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = { specs };
