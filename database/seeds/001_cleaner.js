
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'loveth', password: 'loving'},
        {id: 2, username: 'dijahdeen', password: '123456'},
        {id: 3, username: 'daniel', password: 'danny'}
      ]);
    });
};
