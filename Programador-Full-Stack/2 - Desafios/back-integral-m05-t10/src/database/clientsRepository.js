const knex = require("./index");

const getClientById = async (id) => {
  try {
    const client = await knex("clients").where({ id });

    if (client.length === 0) {
      const notFoundError = new Error("Client not found");
      notFoundError.name = "NotFoundError";
      throw notFoundError;
    }

    return client[0];
  } catch (error) {
    throw error;
  }
};

const getClientByEmail = async (emailToFind) => {
  try {
    const email = await knex("clients").where({ email: emailToFind });

    if (email.length > 0) {
      const badRequestError = new Error("Email already registered");
      badRequestError.name = "BadRequestError";
      throw badRequestError;
    }

    return email;
  } catch (error) {
    throw error;
  }
};

const getClientByCpf = async (cpfToFind) => {
  try {
    const cpf = await knex("clients").where({ cpf: cpfToFind });

    if (cpf.length > 0) {
      const badRequestError = new Error("CPF already registered");
      badRequestError.name = "BadRequestError";
      throw badRequestError;
    }

    return cpf;
  } catch (error) {
    throw error;
  }
};

const saveClients = async (userData) => {
  try {
    const client = await knex("clients").insert(userData).returning("*");

    return client[0];
  } catch (error) {
    throw error;
  }
};

const deleteClient = async (id) => {
  try {
    await getClientById(id);

    await knex("clients").where({ id }).del();
  } catch (error) {
    throw error;
  }
};

const updateClient = async (clientData, id) => {
  try {
    await getClientById(id);

    const client = await knex("clients").where({ id }).update(clientData);

    return client[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getClientById,
  getClientByEmail,
  getClientByCpf,
  saveClients,
  deleteClient,
  updateClient,
};
