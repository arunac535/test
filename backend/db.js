const oracledb = require("oracledb");
require("dotenv").config();

async function initialize() {
  try {
    await oracledb.createPool({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECTION_STRING,
    });
    console.log("Connected");
  } catch (err) {
    console.error("Connection failed:", err);
  }
}

async function close() {
  await oracledb.getPool().close();
}

module.exports = { initialize, close, oracledb };
