
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        { projects_id: 1, resources_id: 1 },
        { projects_id: 1, resources_id: 2 },
        { projects_id: 2, resources_id: 3 }
      ]);
    });
};
