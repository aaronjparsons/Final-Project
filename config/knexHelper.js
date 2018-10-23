require('dotenv').config();
const ENV         = process.env.ENV || "development";
const knexConfig  = require("../database/knexfile");
const knex       = require("knex")(knexConfig[ENV]);