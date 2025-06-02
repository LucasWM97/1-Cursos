const {
  getClientByEmail,
  getClientByCpf,
} = require("../database/clientsRepository");

const validateClientRequest =
  (schemaClient) => async (request, response, next) => {
    try {
      await schemaClient.validateAsync(request.body);

      next();
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  };

const verifyIfEmailCpfExists = async (request, response, next) => {
  const { email, cpf } = request.body;

  try {
    await getClientByEmail(email);
    await getClientByCpf(cpf);

    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = { validateClientRequest, verifyIfEmailCpfExists };
