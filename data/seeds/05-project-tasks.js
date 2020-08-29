
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_tasks').insert([
        { projects_id: 1, tasks_id:1 },
        { projects_id: 1, tasks_id:2 },
        { projects_id: 1, tasks_id:3 },
        { projects_id: 2, tasks_id:4 }
      ]);
    });
};
