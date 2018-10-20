
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contracts', function (table) {
  
    table.increments();
    table.integer("owner_id").unsigned().notNullable();
    table.foreign('owner_id').references('users.id').onDelete('CASCADE');
    table.timestamp('start_date').notNullable();
    table.timestamp('end_date').notNullable();
    table.text('description');
    table.json('location').notNullable();
    table.string('price').notNullable();
    table.integer('total_lots').unsigned().notNullable();
    table.timestamp("date_created").defaultTo(knex.fn.now());
  }).then(function(){
    console.log('table created');
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("contracts");
};
