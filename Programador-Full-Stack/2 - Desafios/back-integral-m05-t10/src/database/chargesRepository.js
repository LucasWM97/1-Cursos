const knex = require("./index");

const getChargeById = async (id) => {
  try {
    const charge = await knex("charges").where({ charge_id: id });

    if (charge.length === 0) {
      const notFoundError = new Error("Charge not found");
      notFoundError.name = "NotFoundError";
      throw notFoundError;
    }

    return charge[0];
  } catch (error) {
    throw error;
  }
};

const saveCharges = async (client_id, chargeData) => {
  try {
    const charge = await knex("charges")
      .where({ client_id })
      .insert(chargeData)
      .returning("*");

    return charge[0];
  } catch (error) {
    throw error;
  }
};

const deleteCharge = async (id) => {
  try {
    await getChargeById(id);

    const charge = await knex("charges").where({ charge_id: id }).del();

    return { charge, message: "Success" };
  } catch (error) {
    throw error;
  }
};

const updateCharge = async (chargeData, id) => {
  try {
    await getChargeById(id);

    const charge = await knex("charges")
      .where({ charge_id: id })
      .update(chargeData)
      .returning("*");

    return charge[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getChargeById,
  saveCharges,
  deleteCharge,
  updateCharge,
};
