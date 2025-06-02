const login = require("../../services/loginServices");
const {
  creatUserService,
  editUserLogged,
  emailVerify,
} = require("../../services/usersServices");
const tryCatch = require("../../utils/tryCatch");

const updateUsersLogged = tryCatch(async (request, response, next) => {
  const { id } = request.user;

  const { name, email, cpf, phone, password } = request.body;

  const userData = {};

  name && (userData.name = name);
  email && (userData.email = email);
  cpf && (userData.cpf = cpf);
  phone && (userData.phone = phone);
  password && (userData.password = password);

  const user = await editUserLogged(userData, id);

  return response.status(201).json({ user });
});

const createUser = tryCatch(async (request, response, next) => {
  const { name, email, password } = request.body;

  const user = await creatUserService(name, email, password);
  return response.status(201).json(user);
});

const loginUser = tryCatch(async (request, response, next) => {
  const { email, password } = request.body;

  if (!email || !password) {
    return response
      .status(401)
      .json({ message: "Email and password required" });
  }

  const token = await login(email, password);
  return response.status(200).json(token);
});

const checkEmail = tryCatch(async (request, response, next) => {
  const { name, email } = request.body;

  const result = await emailVerify(name, email);

  return response.status(200).json(result);
});

const getUserLogged = tryCatch(async (request, response, next) => {
  return response.status(200).json(request.user);
});

module.exports = {
  updateUsersLogged,
  createUser,
  loginUser,
  checkEmail,
  getUserLogged,
};
