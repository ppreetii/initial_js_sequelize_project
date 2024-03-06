"use strict";
const dotenv = require("dotenv");

const app = require("./app.js");
const db = require("./database/models/index.js");

dotenv.config();

const PORT = process.env.PORT || 3300;

const initializeDbAndStartServer = async () => {
  try {
    await db.sequelize.sync();
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}!`);
    });
  } catch (error) {
    console.error(error);
  }
};

initializeDbAndStartServer();
