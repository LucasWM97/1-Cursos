const knex = require("./index");

const getUserById = async (id) => {
  try {
    const user = await knex("users").where({ id });

    if (user.length === 0) {
      const notFoundError = new Error("User not found");
      notFoundError.name = "NotFoundError";
      throw notFoundError;
    }

    return user[0];
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (emailToFound) => {
  try {
    const email = await knex("users").where({ email: emailToFound });

    if (email.length === 0) {
      const badRequestError = new Error("Email or password invalid");
      badRequestError.name = "BadRequestError";
      throw badRequestError;
    }

    return email[0];
  } catch (error) {
    throw error;
  }
};

const saveUsers = async (name, email, password) => {
  try {
    const user = await knex("users")
      .insert({ name, email, password })
      .returning("*");

    return user[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteUser = async (id) => {
  try {
    await getUserById(id);

    await knex("users").where({ id }).del();
  } catch (error) {
    throw error;
  }
};

const updateUser = async (userData, id) => {
  try {
    await getUserById(id);

    const user = await knex("users")
      .where({ id })
      .update(userData)
      .returning("*");

    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUserById,
  getUserByEmail,
  saveUsers,
  deleteUser,
  updateUser,
};
