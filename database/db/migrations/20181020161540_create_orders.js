exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', function (table) {
    table.increments();
    table.integer('renter_id').unsigned().notNullable();
    table.foreign('renter_id').references('users.id');
    table.integer('lot_id').unsigned().notNullable();
    table.foreign('lot_id').references('lots.id');
    table.dateTime('start_time').notNullable();
    table.dateTime('end_time').notNullable();
    table.string('total').unsigned();
    table.dateTime('date_created').defaultTo(knex.fn.now());
  }).then(function(){
    console.log('table created');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};
