const express = require("express");
const {
  getPaidCharges,
  getOverdueCharges,
  getExpectedCharges,
  getAllCharges,
  getAllChargesByClient,
  updateAllCharges,
  createCharge,
  getOneChargeById,
  deleteChargeById,
  editCharge,
} = require("../../controllers/chargesControllers");
const verifyLogin = require("../../middlewares/verifyLogin");

const {
  validateClientRequest,
} = require("../../middlewares/clientsMiddleware");
const chargeSchema = require("../../validations/chargesValidation");
const errorHandler = require("../../middlewares/errorHandler");

const chargesRoutes = express();

chargesRoutes.use(verifyLogin);

chargesRoutes.get("/users/charges/charge-page", getAllCharges);

chargesRoutes.get("/charges/update/status", updateAllCharges);

chargesRoutes.post(
  "/charges/register/:client_id",
  validateClientRequest(chargeSchema),
  createCharge
);

chargesRoutes.get("/clients/charges/:id", getAllChargesByClient);

chargesRoutes.get("/charges/paid", getPaidCharges);

chargesRoutes.get("/charges/overdue", getOverdueCharges);

chargesRoutes.get("/charges/expected", getExpectedCharges);

chargesRoutes.get("/charges/:id", getOneChargeById);

chargesRoutes.delete("/charges/:id", deleteChargeById);

chargesRoutes.put(
  "/charges/edit/:id",
  validateClientRequest(chargeSchema),
  editCharge
);

chargesRoutes.use(errorHandler);

module.exports = chargesRoutes;
