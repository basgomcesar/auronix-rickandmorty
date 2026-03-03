const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Auronix Rick and Morty API",
      version: "1.0.0",
      description: "API Node.js + Express que consume Rick & Morty API y expone endpoints propios.",
    },
    servers: [
      { url: "http://localhost:3000", description: "Local" },
    ],
  },
  apis: ["./src/routes/*.js", "./src/controllers/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerSpec };