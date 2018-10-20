
exports.seed = function(knex, Promise){
    return knex('user').del()
    .then(function (){
        return Promise.all([
            knex('user').insert({first_name:"John", last_name:"Smith", email:"wtf@gmail.com", phone_number:"123456789",password_digest:"d" } ),
            knex('user').insert({first_name:"Dave", last_name:"Samson", email:"g@gmail.com", phone_number:"123356789",password_digest:"d" } ),
            knex('user').insert({first_name:"AA", last_name:"BB", email:"cc@gmail.com", phone_number:"123456789",password_digest:"d" } ),
        ]);

    });
};