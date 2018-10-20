
exports.seed = function(knex, Promise){
  return knex('users').del()
  .then(function (){
    return Promise.all([
      knex('users').insert({id: 1, first_name:"John", last_name:"Smith",
       email:"wtf@gmail.com", phone_number:"123456789",password_digest:"d" } ),
      knex('users').insert({id: 2, first_name:"Dave",
       last_name:"Samson", email:"g@gmail.com", phone_number:"123356789",password_digest:"d" } ),
      knex('users').insert({id: 3, first_name:"AA",
       last_name:"BB", email:"cc@gmail.com", phone_number:"123456789",password_digest:"d" } ),
    ]);
  });
};