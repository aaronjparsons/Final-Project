
exports.seed = function(knex, Promise){
  return knex('lots').del()
  .then(function (){
    return Promise.all([
      knex('lots').insert({id: 1, owner_id:1, contract_id:1, set_price:"1.75",
       is_available: true, picture_src:"test_lot1.jpg", type:"Medium", 
       description:"LOTtest1test1",num_of_sessions:0 } ),
      knex('lots').insert({id: 2, owner_id:1, contract_id:1, set_price:"2.00",
       is_available: false, picture_src:"test_lot2.jpg", type:"Medium",
        description:"LOTtest1test1",num_of_sessions:5 } ),          
      knex('lots').insert({id: 3, owner_id:2, contract_id:2, set_price:"3.00",
       is_available: true, picture_src:"test_lot3.jpg", type:"Large",
        description:"LOTtest1test1",num_of_sessions:15 } ),]);
  });
};

