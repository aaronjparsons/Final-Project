
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contract', function (table) {
  
    table.increments();
    table.foreign('user').references('id').inTable('user');
    table.timestamp('start_date').notNullable();;
    table.timestamp('end_date').notNullable();;
    table.text('description');
    table.json('location').notNullable();;
    table.string('price').notNullable();;
    table.integer().unsigned().notNullable();
    table.timestamp("date_created").defaultTo(knex.fn.now());
  }).then(function(){
    console.log('table created');
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("contract");
};
