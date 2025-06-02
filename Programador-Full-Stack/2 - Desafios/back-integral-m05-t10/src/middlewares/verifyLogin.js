require("dotenv").config();

const jwt = require("jsonwebtoken");
const { getUserById } = require("../database/usersRepository");

const verifylogin = async (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ message: "Unhauthorized" });
  }
  try {
    const token = authorization.replace("Bearer ", "").trim();
    const { id } = jwt.verify(token, process.env.JWT_PASS);

    const userExist = await getUserById(id);

    const { password, ...user } = userExist;
    request.user = user;
    next();
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

module.exports = verifylogin;
