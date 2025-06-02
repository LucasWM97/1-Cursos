const {
  saveUsers,
  getUserById,
  updateUser,
} = require("../../database/usersRepository");
const bcrypt = require("bcrypt");
const knex = require("../../database");

const creatUserService = async (name, email, passwordParam) => {
  try {
    const hashPassword = await bcrypt.hash(passwordParam, 10);

    const emailExist = await knex("users").where("email", email);
    if (emailExist.length > 0) {
      const badRequestError = new Error("Email already registered");
      badRequestError.name = "BadRequestError";
      throw badRequestError;
    }

    const userCreated = await saveUsers(name, email, hashPassword);

    const { password = _, ...user } = userCreated;
    return { user };
  } catch (error) {
    throw error;
  }
};

const editUserLogged = async (userData, id) => {
  const userToEdit = await getUserById(id);

  let { name, email, cpf, phone, password } = userData;

  if (cpf) {
    const cpfExist = await knex("users")
      .where("cpf", userData.cpf)
      .returning("*");

    if (cpfExist.length > 0 && cpfExist[0].cpf !== userToEdit.cpf) {
      const badRequestError = new Error("Cpf already registered");
      badRequestError.name = "BadRequestError";
      throw badRequestError;
    }
  }

  if (email) {
    const emailExist = await knex("users")
      .where("email", userData.email)
      .returning("*");

    if (emailExist.length > 0 && emailExist[0].email !== userToEdit.email) {
      const badRequestError = new Error("Email already registered");
      badRequestError.name = "BadRequestError";
      throw badRequestError;
    }
  }

  if (password) {
    password = await bcrypt.hash(password, 10);
  }

  const user = await updateUser({ name, email, password, cpf, phone }, id);
  const { password: _, ...userUpdated } = user[0];

  return userUpdated;
};

const emailVerify = async (name, email) => {
  if (!name || !email) {
    const badRequestError = new Error("Name and Email required");
    badRequestError.name = "BadRequestError";
    throw badRequestError;
  }
  const userExist = await knex("users").where("email", email);

  if (userExist.length > 0) {
    const badRequestError = new Error("User already registered");
    badRequestError.name = "BadRequestError";
    badRequestError.canRegister = false;
    throw badRequestError;
  }

  return { canRegister: true };
};

module.exports = { creatUserService, emailVerify, editUserLogged };
