const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(
        `Cơ sở dữ liệu đã kết nối thành công với ${data.connection.host}!`
      );
    });
};
module.exports = connectDatabase;