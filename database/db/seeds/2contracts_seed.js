
exports.seed = function(knex, Promise){
  return knex('contracts').del()
  .then(function (){
    return Promise.all([
      knex('contracts').insert({id: 1, owner_id: 1, start_date:date[0], end_date:date[1],
         description:"test1test1",location:{lattitude: 51.0764207, longitude: -113.987134},
         price:"0.75",total_lots:1 } ),
      knex('contracts').insert({id: 2, owner_id: 2, start_date:date[2],
         end_date:date[3], description:"test2test2",location:{lattitude: 51.0516727, longitude: -114.0723894},
         price:"1.00",total_lots:3 } ),
      knex('contracts').insert({id: 3, owner_id: 3, start_date:date[4],
         end_date:date[5], description:"test3test3",location:{lattitude: 51.0457113, longitude: -114.086558},
         price:"0.75",total_lots:10 } ),
    ]);
  })
};

let date = [new Date(2018,11,21),new Date(2018,12,20),new Date(2018,11,30),new Date(2018,12,30),new Date(2018,12,25),
    new Date(2018,12,26),new Date(2019,01,05) ]