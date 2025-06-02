const express = require("express");
const clientRoutes = express();
const {
  validateClientRequest,
  verifyIfEmailCpfExists,
} = require("../../middlewares/clientsMiddleware");
const {
  createClient,
  getClientsPaidUp,
  getClientsInArrears,
  getAllClients,
  updateClientProfile,
  updateAllClients,
  getClientbyIdController,
  updateStatusOfSingleClient,
} = require("../../controllers/clientsControllers");
const clientsSchema = require("../../validations/clientsValidations");
const verifylogin = require("../../middlewares/verifyLogin");
const errorHandler = require("../../middlewares/errorHandler");

clientRoutes.use(verifylogin);

clientRoutes.get("/users/clients/client-page", getAllClients);

clientRoutes.get("/clients/paidup", getClientsPaidUp);

clientRoutes.get("/clients/in-arrears", getClientsInArrears);

clientRoutes.get("/clients/:id", getClientbyIdController);

clientRoutes.get("/clients/update/status/:id", updateStatusOfSingleClient);

clientRoutes.get("/clients/update/status", updateAllClients);

clientRoutes.put("/clients/edit/profile/:id", updateClientProfile);

clientRoutes.post(
  "/clients/register/",
  validateClientRequest(clientsSchema),
  verifyIfEmailCpfExists,
  createClient
);

clientRoutes.use(errorHandler);

module.exports = clientRoutes;
