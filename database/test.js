require('dotenv').config();

const pg = require("pg");


const client = new pg.Client({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : "db",
  port     : process.env.DB_PORT,
  ssl      : process.env.DB_SSL
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT * FROM user", (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    //output: 1
    console.log(result)
    client.end();
  });
});