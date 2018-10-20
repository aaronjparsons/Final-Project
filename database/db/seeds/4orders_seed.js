
exports.seed = function(knex, Promise){
  return knex('orders').del()
  .then(function (){
    return Promise.all([
      knex('orders').insert({renter_id:3, lot_id:1, start_time:date[0],
       end_time: date[1], total:'12'} ),
       knex('orders').insert({renter_id:2, lot_id:2, start_time:date[2],
        end_time: date[3], total:'222'} ),         
        knex('orders').insert({renter_id:1, lot_id:3, start_time:date[4],
          end_time: date[5], total:'11.20'} )]);
  });
};

let date = [new Date(2018,11,21,11,00),new Date(2018,11,21,12,00),new Date(2018,12,01,13,10),new Date(2018,12,01,22,10),new Date(2018,12,26,2,13),
  new Date(2018,12,26,3,15)]