const db = require('../data/dbconfig');

module.exports = {
   getAllProjects,
   getAllResources,
   addProject,
   addTask,
   addResource,
   getProjectTasks
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

function getProjectTasks(project_id) {
    return db('project_tasks as pt')
        .join('tasks as t', 't.id', 'pt.task_id')
        .join('projects as p', 'p.id', 'pt.project_id')
        .where({ project_id })
    
}