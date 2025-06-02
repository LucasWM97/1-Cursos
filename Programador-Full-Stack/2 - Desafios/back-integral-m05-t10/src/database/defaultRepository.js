const knex = require("./index");
const { getUserById } = require("./usersRepository");

const buildFilters = (query, filters) => {
  if (filters.name) {
    const nameFilter =
      filters.name.length < 4 ? `${filters.name}%` : `%${filters.name}%`;
    query.where("name", "ilike", nameFilter);
  }

  if (filters.email) {
    const emailFilter =
      filters.email.length < 4 ? `${filters.email}%` : `%${filters.email}%`;
    query.where("email", "ilike", emailFilter);
  }

  if (filters.cpf) {
    const cpfFilter =
      filters.cpf.length < 4 ? `${filters.cpf}%` : `%${filters.cpf}%`;
    query.where("cpf", "ilike", cpfFilter);
  }

  if (filters.charge_id) {
    const chargeId = parseInt(filters.charge_id, 10);
    query.where("charge_id", "=", chargeId);
  }
  if (filters.status_client) {
    query.whereRaw("status::text ilike ?", [`%${filters.status_client}%`]);
  }

  if (filters.status_charge) {
    query.whereRaw("status::text ilike ?", [`%${filters.status_charge}%`]);
  }
};

const paginateQuery = async (user_id, table, page, column, filters = {}) => {
  const itemsPerPage = 10;
  const offset = (page - 1) * itemsPerPage;

  try {
    await getUserById(user_id);

    const clientsQuery = knex(table).select("*").where({ user_id });
    buildFilters(clientsQuery, filters);

    let orderBy = [
      { column: "createdat", order: "desc" },
      { column, order: "desc" },
    ];

    if (filters.alphabetical === "true") {
      orderBy = [{ column: "name", order: "asc" }];
    } else if (filters.alphabetical === "false") {
      orderBy = [{ column: "name", order: "desc" }];
    } else if (filters.name) {
      orderBy = [{ column: "name", order: "asc" }];
    }

    if (filters.numericOrder === "true") {
      orderBy = [{ column: "charge_id", order: "asc" }];
    } else if (filters.numericOrder === "false") {
      orderBy = [{ column: "charge_id", order: "desc" }];
    }

    const clients = await clientsQuery
      .orderBy(orderBy)
      .limit(itemsPerPage)
      .offset(offset);

    const totalClientsQuery = knex(table).where({ user_id });
    buildFilters(totalClientsQuery, filters);

    const totalClients = await totalClientsQuery.count("* as total").first();
    const totalPages = Math.ceil(totalClients.total / itemsPerPage);

    return {
      data: clients,
      currentPage: page,
      totalPages,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = { paginateQuery };
