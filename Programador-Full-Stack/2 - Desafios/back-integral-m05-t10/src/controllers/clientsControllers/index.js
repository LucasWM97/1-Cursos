const {
  saveClients,
  getClientById,
} = require("../../database/clientsRepository");
const {
  getClientsPaidUpService,
  getClientsInArrearsService,
  updateClientProfileService,
  updateStatusOfAllClients,
  getAllClientsService,
  updateStatusOfSingleClientService,
} = require("../../services/clientsServices");
const tryCatch = require("../../utils/tryCatch");

const createClient = tryCatch(async (request, response, next) => {
  const { id } = request.user;

  const {
    name,
    email,
    cpf,
    phone,
    address,
    complement,
    cep,
    district,
    city,
    uf,
  } = request.body;

  const user_id = id;
  const status = "paidup";

  const clientData = {
    status,
    name,
    email,
    cpf,
    phone,
    user_id,
  };

  address && (clientData.address = address);
  complement && (clientData.complement = complement);
  cep && (clientData.cep = cep);
  district && (clientData.district = district);
  city && (clientData.city = city);
  uf && (clientData.uf = uf);

  const client = await saveClients(clientData);

  return response.status(201).json({ client });
});

const getClientsPaidUp = tryCatch(async (request, response, next) => {
  const { id } = request.user;

  const clients = await getClientsPaidUpService(id);

  return response.status(200).json(clients);
});

const getClientsInArrears = tryCatch(async (request, response, next) => {
  const { id } = request.user;

  const clients = await getClientsInArrearsService(id);

  return response.status(200).json(clients);
});

const getAllClients = tryCatch(async (request, response, next) => {
  const { id } = request.user;
  const { page, name, email, cpf, alphabetical, status_client } = request.query;

  const filters = {
    name: name ?? undefined,
    email: email ?? undefined,
    cpf: cpf ?? undefined,
    alphabetical: alphabetical ?? undefined,
    status_client: status_client ?? undefined,
  };

  const result = await getAllClientsService(id, page, filters);

  return response.status(200).json(result);
});

const updateClientProfile = tryCatch(async (request, response, next) => {
  const { id } = request.params;
  const {
    name,
    email,
    cpf,
    phone,
    address,
    complement,
    cep,
    district,
    city,
    uf,
  } = request.body;

  const clientData = {
    name,
    email,
    cpf,
    phone,
    address,
    complement,
    cep,
    district,
    city,
    uf,
  };
  const client = await updateClientProfileService(id, clientData);

  return response
    .status(200)
    .json({ message: "Client profile successfully updated", client });
});

const updateAllClients = tryCatch(async (request, response, next) => {
  const { id } = request.user;

  const clients = await updateStatusOfAllClients(id);

  return response.status(200).json(clients);
});

const updateStatusOfSingleClient = tryCatch(async (request, response, next) => {
  const { id } = request.params;

  await updateStatusOfSingleClientService(id);

  return response.status(200).json("Client status updated");
});

const getClientbyIdController = tryCatch(async (request, response, next) => {
  const { id } = request.params;

  const client = await getClientById(id);

  return response.status(200).json({ client });
});

module.exports = {
  createClient,
  getClientsPaidUp,
  getClientsInArrears,
  getAllClients,
  updateClientProfile,
  updateAllClients,
  getClientbyIdController,
  updateStatusOfSingleClient,
};
