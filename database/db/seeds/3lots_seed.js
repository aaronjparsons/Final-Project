
exports.seed = function(knex, Promise){
  return knex('lots').del()
  .then(function (){
      return Promise.all([
          knex('lots').insert({owner_id:1, contract_id:1, set_price:"1.75",
           is_available: true, picture_src:"test_lot1.jpg", type:"Medium", 
           description:"LOTtest1test1",num_of_sessions:0 } ),
          knex('lots').insert({owner_id:1, contract_id:1, set_price:"2.00",
           is_available: false, picture_src:"test_lot2.jpg", type:"Medium",
            description:"LOTtest1test1",num_of_sessions:5 } ),          
          knex('lots').insert({owner_id:2, contract_id:2, set_price:"3.00",
           is_available: true, picture_src:"test_lot3.jpg", type:"Large",
            description:"LOTtest1test1",num_of_sessions:15 } ),]);
  });
};

let date = [new Date(2018,11,21),new Date(2018,12,20),new Date(2018,11,30),new Date(2018,12,30),new Date(2018,12,25),
    new Date(2018,12,26),new Date(2019,01,05) ]