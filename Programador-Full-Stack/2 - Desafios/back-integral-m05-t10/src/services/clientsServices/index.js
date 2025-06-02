const knex = require("../../database");
const {
  getClientById,
  updateClient,
} = require("../../database/clientsRepository");
const { paginateQuery } = require("../../database/defaultRepository");

async function getClientsByStatus(id, status) {
  try {
    const clients = await knex("clients")
      .select("*")
      .where("clients.user_id", id)
      .where("clients.status", status);

    return clients;
  } catch (error) {
    throw error;
  }
}

const getClientsPaidUpService = async (id) => {
  const clients = await getClientsByStatus(id, "paidup");
  return clients;
};

const getClientsInArrearsService = async (id) => {
  const clients = await getClientsByStatus(id, "in_arrears");
  return clients;
};

const getAllClientsService = async (user_id, page, filters) => {
  try {
    const response = await paginateQuery(
      user_id,
      "clients",
      page,
      "id",
      filters
    );

    return response;
  } catch (error) {
    throw error;
  }
};

const updateClientProfileService = async (id, clientData) => {
  const clientToEdit = await getClientById(id);

  let { email, cpf } = clientData;

  if (cpf) {
    const cpfExist = await knex("clients")
      .where({ cpf: clientData.cpf })
      .returning("*");

    if (cpfExist.length > 0 && cpfExist[0].cpf !== clientToEdit.cpf) {
      const badRequestError = new Error("Cpf already registered");
      badRequestError.name = "BadRequestError";
      throw badRequestError;
    }
  }

  if (email) {
    const emailExist = await knex("clients")
      .where({ email: clientData.email })
      .returning("*");

    if (emailExist.length > 0 && emailExist[0].email !== clientToEdit.email) {
      const badRequestError = new Error("Email already registered");
      badRequestError.name = "BadRequestError";
      throw badRequestError;
    }
  }
  const client = await updateClient(clientData, id);
  return client;
};

const updateStatusOfSingleClientService = async (client_id) => {
  await getClientById(client_id);

  const charges = await knex("charges").where({ client_id });

  if (charges.length === 0) {
    await knex("clients").where({ id: client_id }).update({ status: "paidup" });
    return;
  }

  charges.map(async (charge) => {
    if (charge.status === "overdue") {
      await knex("clients")
        .where({ id: charge.client_id })
        .update({ status: "in_arrears" });
      return;
    } else {
      await knex("clients")
        .where({ id: charge.client_id })
        .update({ status: "paidup" });
    }
  });
};

const updateStatusOfAllClients = async (id) => {
  try {
    const charges = await knex("charges").where({ user_id: id });

    charges.map(async (charge) => {
      if (charge.status === "overdue") {
        await knex("clients")
          .where({ id: charge.client_id })
          .update({ status: "in_arrears" });
      }
    });

    return "All clients updated";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getClientsInArrearsService,
  getClientsPaidUpService,
  getAllClientsService,
  updateClientProfileService,
  updateStatusOfAllClients,
  updateStatusOfSingleClientService,
};
