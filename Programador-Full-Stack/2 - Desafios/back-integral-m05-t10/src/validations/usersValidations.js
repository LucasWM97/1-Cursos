const joi = require("joi");

const usersJoiSchema = joi.object({
  name: joi.string().required().messages({
    "any.required": "The name field is required",
    "string.empty": "The name field is required",
  }),

  email: joi.string().email().required().messages({
    "string.email": "The email field must have a valid format",
    "any.required": "The email field is required",
    "string.empty": "The email field is required",
  }),

  password: joi.string().min(5).required().messages({
    "any.required": "The password field is required",
    "string.empty": "The password field is required",
    "string.min": "The password must be at least 5 characters long",
  }),
});

const usersJoiSchemaEdit = joi.object({
  name: joi.string().messages({
    "string.empty": "The name field is required",
  }),

  email: joi.string().email().messages({
    "string.email": "The email field must have a valid format",

    "string.empty": "The email field is required",
  }),

  password: joi.string().allow("").min(5).messages({
    "string.empty": "The password field is required",
    "string.min": "The password must be at least 5 characters long",
  }),
  cpf: joi.string().allow("").max(11).min(11).messages({
    "string.empty": "the cpf field cannot be empty",

    "string.max": "the cpf field must have a maximum of 11 characters",
    "string.min": "the cpf field must have a minimum of 11 characters",
  }),
  phone: joi.string().allow("").messages({
    "string.empty": "the phone field cannot be empty",
  }),
});

module.exports = { usersJoiSchema, usersJoiSchemaEdit };
