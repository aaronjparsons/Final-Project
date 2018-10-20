
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contracts', function (table) {
    table.increments();
    table.integer("owner_id").unsigned().notNullable();
    table.foreign('owner_id').references('users.id').onDelete('CASCADE').onUpdate('CASCADE');;
    table.dateTime('start_date').notNullable();
    table.dateTime('end_date').notNullable();
    table.text('description');
    table.json('location').notNullable();
    table.string('price').notNullable();
    table.integer('total_lots').unsigned().notNullable();
    table.dateTime("date_created").defaultTo(knex.fn.now());
  }).then(function(){
    console.log('table created');
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("contracts");
};
