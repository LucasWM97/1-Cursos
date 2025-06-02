require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getUserByEmail } = require("../../database/usersRepository");

const login = async (email, password) => {
  try {
    const user = await getUserByEmail(email);

    const passwordValidate = await bcrypt.compare(password, user.password);

    if (!passwordValidate) {
      const unauthorizedError = new Error("Email or Password invalid");
      unauthorizedError.name = "UnauthorizedError";
      throw unauthorizedError;
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_PASS, {
      expiresIn: "8h",
    });
    const { password: _, ...userData } = user;
    return { user: userData, token };
  } catch (error) {
    throw error;
  }
};

module.exports = login;
