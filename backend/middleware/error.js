const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (error, req, res, next) => {
  error.statusCode = err.statusCode || 500;
  error.message = err.message || "Lỗi server";
  ///wrong id error
  if ((error.name = "CastError")) {
    const message = `Dữ liệu không tìm thấy. Lỗi ${error.path}`;
    error = new ErrorHandler(message, 400);
  }
  //duplicate key error
  if (error.code === 11000) {
    const message = `Trùng dữ liệu ${Object.keys(error.keyValue)}`;
    error = new ErrorHandler(message, 400);
  }
  //jsonwebtoken error
  if ((error.name = "JsonWebTokenError")) {
    const message = "Vui lòng thử lại sau !";
    error = new ErrorHandler(message, 400);
  }
  //jsonwebtoken expired
  if ((error.name = "TokenExpiredError")) {
    const message = "Vui lòng thử lại sau !";
    error = new ErrorHandler(message, 400);
  }
  res.status(error.statusCode).json({
    success: true,
    message: error.message,
  });
};
