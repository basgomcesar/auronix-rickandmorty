const express = require("express");
const cors = require("cors");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const { swaggerSpec } = require("./docs/swagger");

const PORT = process.env.PORT || 3000;

const routes = require("./routes/character.routes");
const { errorHandler } = require("./middlewares/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", routes);   
app.use(errorHandler);    

module.exports = app;