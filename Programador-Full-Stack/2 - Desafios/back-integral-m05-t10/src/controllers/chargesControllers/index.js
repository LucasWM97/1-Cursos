const {
  getAllOverdueCharges,
  getAllExpectedCharges,
  getAllPaidCharges,
  getAllChargesService,
  getAllChargesByClientService,
  updateStatusOfAllCharges,
  createChargeService,
  editChargeService,
} = require("../../services/chargesServices");

const {
  getChargeById,
  deleteCharge,
} = require("../../database/chargesRepository");
const tryCatch = require("../../utils/tryCatch");

const handleChargeRequest = async (
  request,
  response,
  chargeTypeFetcher,
  next
) => {
  const { id } = request.user;
  try {
    const charges = await chargeTypeFetcher(id);
    return response.status(200).json(charges);
  } catch (error) {
    return next(error);
  }
};

const getPaidCharges = async (request, response) => {
  return handleChargeRequest(request, response, getAllPaidCharges);
};

const getOverdueCharges = async (request, response) => {
  return handleChargeRequest(request, response, getAllOverdueCharges);
};

const getExpectedCharges = async (request, response) => {
  return handleChargeRequest(request, response, getAllExpectedCharges);
};

const getOneChargeById = tryCatch(async (request, response, next) => {
  const { id } = request.params;

  const charge = await getChargeById(id);
  return response.status(200).json({ charge });
});

const getAllCharges = tryCatch(async (request, response, next) => {
  const { id } = request.user;
  const { page, name, charge_id, alphabetical, status_charge, numericOrder } =
    request.query;
  const filters = {
    name: name ?? undefined,
    charge_id: charge_id ?? undefined,
    alphabetical: alphabetical ?? undefined,
    status_charge: status_charge ?? undefined,
    numericOrder: numericOrder ?? undefined,
  };

  const result = await getAllChargesService(id, page, filters);

  return response.status(200).json(result);
});

const getAllChargesByClient = tryCatch(async (request, response, next) => {
  const { id } = request.params;

  const charges = await getAllChargesByClientService(id);
  return response.status(200).json({ charges });
});

const deleteChargeById = tryCatch(async (request, response, next) => {
  const { id } = request.params;

  await deleteCharge(id);

  return response.status(200).json("Successfully deleted");
});

const updateAllCharges = tryCatch(async (request, response, next) => {
  const { id } = request.user;
  const charges = await updateStatusOfAllCharges(id);

  return response.status(200).json(charges);
});

const createCharge = tryCatch(async (request, response, next) => {
  const { value, status, description, due_date, name } = request.body;

  const { id } = request.user;
  const { client_id } = request.params;

  const chargeData = {
    user_id: id,
    client_id,
    value,
    status,
    description,
    due_date,
    name,
  };

  const charge = await createChargeService(client_id, chargeData);

  return response.status(201).json({ charge });
});

const editCharge = tryCatch(async (request, response, next) => {
  const { id } = request.params;
  const { value, status, description, due_date, name } = request.body;

  const chargeEdit = await editChargeService(id, {
    value,
    status,
    description,
    due_date,
    name,
  });
  return response.status(200).json(chargeEdit);
});

module.exports = {
  getPaidCharges,
  getExpectedCharges,
  getOverdueCharges,
  getAllCharges,
  getAllChargesByClient,
  deleteChargeById,
  updateAllCharges,
  createCharge,
  getOneChargeById,
  editCharge,
};
