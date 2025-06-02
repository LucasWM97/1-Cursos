const knex = require("../../database");
const {
  saveCharges,
  updateCharge,
} = require("../../database/chargesRepository");
const { getClientById } = require("../../database/clientsRepository");
const { paginateQuery } = require("../../database/defaultRepository");
const { getUserById } = require("../../database/usersRepository");
const { parse, isBefore } = require("date-fns");

const getChargesWithoutTypeStatus = async (id, status) => {
  await getUserById(id);

  try {
    const charges = await knex("charges").select("*").where({
      "charges.user_id": id,
      "charges.status": status,
    });

    const totalValue = charges.reduce(
      (accumulator, item) => accumulator + item.value,
      0
    );

    return {
      charges,
      totalValue,
    };
  } catch (error) {
    throw error;
  }
};

const getAllPaidCharges = async (id) => {
  return getChargesWithoutTypeStatus(id, "paid");
};

const getAllOverdueCharges = async (id) => {
  return getChargesWithoutTypeStatus(id, "overdue");
};

const getAllExpectedCharges = async (id) => {
  return getChargesWithoutTypeStatus(id, "expected");
};

const getAllChargesService = async (user_id, page, filters = {}) => {
  try {
    const response = await paginateQuery(
      user_id,
      "charges",
      page,
      "charge_id",
      filters
    );

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllChargesByClientService = async (client_id) => {
  try {
    await getClientById(client_id);

    const charges = await knex("charges").select("*").where({ client_id });

    return charges;
  } catch (error) {
    throw error;
  }
};

const updateChargeStatus = async (chargeId, newStatus) => {
  try {
    await knex("charges")
      .where({ charge_id: chargeId })
      .update({ status: newStatus });
  } catch (error) {
    throw error;
  }
};

const updateStatusOfAllCharges = async (id) => {
  try {
    let chargesFounded = await getChargesWithoutTypeStatus(id, "expected");

    const currentDate = new Date();
    const { charges } = chargesFounded;
    charges.map((charge) => {
      const dueDate = new Date(charge.due_date);
      if (dueDate < currentDate) {
        charge.status = "overdue";
        updateChargeStatus(charge.charge_id, "overdue");
      }

      return charge;
    });

    return { message: "All charges status updated" };
  } catch (error) {
    throw error;
  }
};

const checkDueDateAndStatusValidity = (due_date, status) => {
  const currentDate = new Date();
  const parsedDueDate = parse(due_date, "dd/MM/yyyy", new Date());

  if (isBefore(parsedDueDate, currentDate) && status === "expected") {
    const badRequestError = new Error(
      "Can't register a charge with expected status and due date less than current date"
    );
    badRequestError.name = "BadRequestError";
    throw badRequestError;
  }
};

const createChargeService = async (client_id, chargeData) => {
  const { due_date, status } = chargeData;
  checkDueDateAndStatusValidity(due_date, status);

  const charge = await saveCharges(client_id, chargeData);
  return charge;
};

const editChargeService = async (id, chargeDataEdit) => {
  const { due_date, status } = chargeDataEdit;
  checkDueDateAndStatusValidity(due_date, status);

  const charge = await updateCharge(chargeDataEdit, id);
  return charge;
};

module.exports = {
  getAllPaidCharges,
  getAllOverdueCharges,
  getAllExpectedCharges,
  getAllChargesService,
  getAllChargesByClientService,
  updateStatusOfAllCharges,
  createChargeService,
  editChargeService,
};
