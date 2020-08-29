
exports.up = function(knex) {
    return knex.schema
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // Creates the project table
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      .createTable('projects', tbl => { 
          tbl.increments().unique()
          tbl.string('project', 128).notNullable()
          tbl.string('description')
          tbl.boolean('completed').notNullable().defaultTo(false)
      })
      //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      // Creates the resources table
      //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      .createTable('resources', tbl => {
          tbl.increments().unique()
          tbl.string('resource').notNullable().unique()
          tbl.string('description')
      })
      //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      // Creates tasks Table
      //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      .createTable('tasks', tbl => { 
          tbl.increments().unique()
          tbl.string('task').notNullable()
          tbl.string('notes')
          tbl.boolean('completed').notNullable().defaultTo(false)
      })
      //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      // Creates the Project tasks table
      //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      .createTable('project_tasks', tbl => {
          tbl.increments()
          tbl.integer('projects_id')
              .unsigned()
              .notNull()
              .references('id')
              .inTable('projects')
              .onUpdate('CASCADE')
              .onDelete('RESTRICT');
          tbl.integer('tasks_id')
              .unsigned()
              .notNull()
              .references('id')
              .inTable('tasks')
              .onUpdate('CASCADE')
              .onDelete('RESTRICT')
      })
      //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      // Creates the project resourcestable 
      //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      .createTable('project_resources', tbl => {
          tbl.increments()
          tbl.integer('projects_id')
              .unsigned()
              .notNull()
              .references('id')
              .inTable('projects')
              .onUpdate('CASCADE')
              .onDelete('RESTRICT')
          tbl.integer('resources_id')
              .unsigned()
              .notNull()
              .references('id')
              .inTable('resources')
              .onUpdate('CASCADE')
              .onDelete('RESTRICT')
      })
  };
  
  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  // Rollsback the migration
  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  exports.down = function(knex) {
      return knex.schema
          .dropTableIfExists('project_resources')
          .dropTableIfExists('project_tasks')
          .dropTableIfExists('tasks')
          .dropTableIfExists('resources')
          .dropTableIfExists('projects')
  
  };
  