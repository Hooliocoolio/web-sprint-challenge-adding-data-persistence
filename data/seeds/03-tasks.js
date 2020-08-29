
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task: "prepare files", notes:'create folder structure', completed: true },
        { task: "write down db plan", notes:'create a plan for database', completed: true },
        { task: "create endpoints", notes:'code endpints', completed: false },
        { task: "fillout sprint form", notes:'make sure to do this before 7pm', completed: false }
      ]);
    });
};
