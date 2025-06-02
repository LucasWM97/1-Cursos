const joi = require("joi");

const clientsSchema = joi.object({
  name: joi.string().required().messages({
    "string.empty": "the name field cannot be empty",
    "any.required": "the name field is required",
  }),
  email: joi.string().email().required().messages({
    "string.empty": "the email field cannot be empty",
    "any.required": "the email field is required",
    "string.email": "the email must have a valid format",
  }),
  cpf: joi.string().required().max(11).min(11).messages({
    "string.empty": "the cpf field cannot be empty",
    "any.required": "the cpf field is required",
    "string.max": "the cpf field must have a maximum of 11 characters",
    "string.min": "the cpf field must have a minimum of 11 characters",
  }),
  phone: joi.string().required().messages({
    "string.empty": "the phone field cannot be empty",
    "any.required": "the phone field is required",
  }),
  address: joi
    .string()
    .allow("")
    .messages({ "string.base": "the address field must be of type string" }),
  complement: joi.string().allow("").messages({
    "string.base": "the complement field must be of type string",
  }),
  cep: joi
    .string()
    .allow("")
    .messages({ "string.base": "the cep field must be of type string" }),
  district: joi
    .string()
    .allow("")
    .messages({ "string.base": "the district field must be of type string" }),
  city: joi
    .string()
    .allow("")
    .messages({ "string.base": "the city field must be of type string" }),
  uf: joi
    .string()
    .allow("")
    .messages({ "string.base": "the uf field must be of type string" }),
});

module.exports = clientsSchema;
