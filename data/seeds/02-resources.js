
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource: 'computer', description: "need a laptop to work on this project"},
        { resource: 'read me file', description: "clients instructions"},
        { resource: 'sprint form', description: "fillout before 7pm"}
      ]);
    });
};
