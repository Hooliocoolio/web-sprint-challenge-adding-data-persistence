
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project: 'the sprint', description: "adding data persistence", completed: false },
        { project: 'sprint retro', description: "fill out form", completed: false }
      ]);
    });
};
