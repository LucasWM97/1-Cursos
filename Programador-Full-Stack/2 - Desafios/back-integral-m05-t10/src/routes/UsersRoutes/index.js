const express = require("express");
const {
  updateUsersLogged,
  createUser,
  loginUser,
  checkEmail,
  getUserLogged,
} = require("../../controllers/usersControllers");

const {
  validateClientRequest,
} = require("../../middlewares/clientsMiddleware");
const {
  usersJoiSchema,
  usersJoiSchemaEdit,
} = require("../../validations/usersValidations");
const verifylogin = require("../../middlewares/verifyLogin");
const errorHandler = require("../../middlewares/errorHandler");

const userRoutes = express();

userRoutes.get("/users/profile", verifylogin, getUserLogged);
userRoutes.post("/users/check-email", checkEmail);
userRoutes.post(
  "/users/register",
  validateClientRequest(usersJoiSchema),
  createUser
);
userRoutes.post("/auth/login", loginUser);
userRoutes.put(
  "/users/edit/profile",
  validateClientRequest(usersJoiSchemaEdit),
  verifylogin,
  updateUsersLogged
);

userRoutes.use(errorHandler);

module.exports = userRoutes;
