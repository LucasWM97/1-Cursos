const errorHandler = (error, request, response, next) => {
  if (error.name === "NotFoundError") {
    return response
      .status(404)
      .json({ message: error.message, type: error.name });
  } else if (error.name === "BadRequestError") {
    return response.status(400).json({
      message: error.message,
      type: error.name,
      canRegister: error?.canRegister,
    });
  } else if (error.name === "UnauthorizedError") {
    return response
      .status(401)
      .json({ message: error.message, type: error.name });
  }

  return response.status(500).json({ message: "Error", error: error.message });
};

module.exports = errorHandler;
