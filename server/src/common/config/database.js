const mysql = require("think-model-mysql");

module.exports = {
  handle: mysql,
  database: "hiolabsDB",
  prefix: "hiolabs_",
  encoding: "utf8mb4",
  host: "127.0.0.1",
  port: "3306",
  user: "pj_mall",
  password: "7ujm6yhnP",
  dateStrings: true
};
