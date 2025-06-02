const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("../routes/healthCheck");
const clientRoutes = require("../routes/clientsRoute");
const userRoutes = require("../routes/UsersRoutes");
const verifylogin = require("../middlewares/verifyLogin");
const chargesRoutes = require("../routes/chargesRoutes");

app.use(express.json());
app.use(cors());

app.use(routes);
app.use(userRoutes);
app.use(clientRoutes);
app.use(chargesRoutes);

module.exports = app;
