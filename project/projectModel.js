const db = require('../data/dbconfig');

module.exports = {
   getAllProjects,
   getAllResources,
   addProject,
   addTask,
   addResource,
   getProjectTasks,
   getPR
}

//---GETS ALL PROJECTS---------------------------------------------------------
function getAllProjects(){
    return db('projects')
};

//---GETS ALL RESOURCES---------------------------------------------------------
function getAllResources(){
    return db('resources')
};

//------ADDS PROJECT-----------------------------------------------------------
function addProject(project){
    return db('projects').insert(project)
}

//------ADDS TASKS-----------------------------------------------------------
function addTask(task){
    return db('tasks').insert(task)
}

//------ADDS RESOURCES-----------------------------------------------------------
function addResource(resource){
    return db('resources').insert(resource)
}

//-----------------------------------------------------------------------------
function getProjectTasks(projects_id) {
    return db('project_tasks as pt')
        .join('tasks as t', 't.id', 'pt.tasks_id')
        .join('projects as p', 'p.id', 'pt.projects_id')
        .where({ projects_id })
}

function getPR(projects_id) {
    return db('project_resources')
    .select("*")
    .where({ projects_id })
}