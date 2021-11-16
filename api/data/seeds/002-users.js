
exports.seed = function(knex) {
return knex('users')
.insert([{
  username: 'Alice',
  password: '12345'
},
{username: 'Bob',
password: '12345'}])
};
