const joi = require("joi");

const chargeSchema = joi.object({
  name: joi.string().required().messages({
    "string.empty": "the name field cannot be empty",
    "any.required": "the name field is required",
  }),
  value: joi.number().required().messages({
    "number.empty": "the value field cannot be empty",
    "any.required": "the value field is required",
  }),
  status: joi.string().required().messages({
    "string.empty": "the status field cannot be empty",
    "any.required": "the status field is required",
  }),
  description: joi.string().required().messages({
    "string.empty": "the description field cannot be empty",
    "any.required": "the description field is required",
  }),
  due_date: joi.string().required().messages({
    "string.empty": "the due_date field cannot be empty",
    "any.required": "the due_date field is required",
  }),
});

module.exports = chargeSchema;
