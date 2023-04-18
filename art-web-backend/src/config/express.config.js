const express = require("express");
const cors = require("cors");
const path = require('path');
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const { specs } = require("../config/swagger.config");

const api = process.env.API_URL;

const app = express();
//cross origin resource sharing
//allow for all domain/origin
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//static images folder

const dirname = path.resolve();
//console.log(path.join(dirname,'src/images'))
app.use("/src/images", express.static(path.join(dirname,'src/images')));
// routes import
const authRoutes = require("../routes/auth.Routes");
const categoryRoutes = require("../routes/category.Routes");
const productRoutes = require("../routes/product.Routes");
const aboutproductRoutes = require("../routes/aboutProduct.Routes");
const customerInfoRoutes = require("../routes/customerInfo.Routes");
const orderRoutes = require("../routes/order.Routes");
const tokenRoutes = require("../routes/token.Routes");

//routes
app.use(`${api}/`, authRoutes);
app.use(`${api}/`, categoryRoutes);
app.use(`${api}/`, productRoutes);
app.use(`${api}/`, aboutproductRoutes);
app.use(`${api}/`, customerInfoRoutes);
app.use(`${api}/`, orderRoutes);
app.use(`${api}/`, tokenRoutes);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

module.exports = app;
