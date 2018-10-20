
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lots', function (table) {
  
    table.increments();
    table.integer('owner_id').unsigned().notNullable();
    table.integer('contract_id').unsigned().notNullable();
    table.foreign('owner_id').references('users.id').onDelete('CASCADE');
    table.foreign('contract_id').references('contracts.id');
    table.string('set_price').notNullable();
    table.boolean('is_available');
    table.string('picture_src');
    table.string('type');
    table.text('description');
    table.integer('num_of_sessions').unsigned();
    table.timestamp('date_created').defaultTo(knex.fn.now());
  }).then(function(){
    console.log('table created');
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lots');
};
