require('dotenv').config({path:'../.env'})


require ('pg')
var knex = require('knex')({
  client: 'postgresql',
  connection: {
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    port     : process.env.DB_PORT,
    ssl      : process.env.DB_SSL
  },
  searchPath: ['knex', 'public', "'$USER'"]
});
// knex.schema.createTable("test",function(table){
//   table.increments();
//   table.string("name");
//   table.timestamps();
// }).then()
// knex.schema.dropTable("test").then(function(result){
//   console.log('table dropped');
// }).then()


console.log(knex.schema);