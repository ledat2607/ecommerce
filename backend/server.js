const app = require("./app");
const connectDatabase = require("./db/Database");
//handling uncaught
process.on("uncaughtException", (err) => {
  console.log(`Lỗi: ${err.message}`);
  console.log("Đang tắt server");
});

///Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}
//connect Database
connectDatabase();
//Create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server đang chạy tại cổng http://localhost/${process.env.PORT}`);
});
//Unhandle promise
process.on("unhandledRejection", (err) => {
  console.log(`Lỗi :${err.message}`);
  console.log("Đang tắt server");
  server.close(() => {
    process.exit(1);
  });
});
