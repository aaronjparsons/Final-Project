//Creates the user table 
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('first_name').notNullable;
    table.string('last_name').notNullable;
    table.string('email').notNullable;
    table.string('phone_number');
    table.string('password_digest'); 
    table.dateTime("date_created").defaultTo(knex.fn.now());
  }).then(function(){
    console.log('table created');
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
