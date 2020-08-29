const express = require('express');
const data = require('./projectModel');
const router = express.Router();

//-----------------------------------------------------------------------------
// (READ) GETS ALL PROJECTS
//-----------------------------------------------------------------------------
router.get('/projects', async (req, res, next) => {
    try {
        const projects = await data.getAllProjects()
        res.json(projects)

    } catch (err) {
        next (err)
    }
})

//-----------------------------------------------------------------------------
// (READ) GETS ALL RESOURCES
//-----------------------------------------------------------------------------
router.get('/resources', async (req, res, next) => {
    try {
        const resources = await data.getAllResources()
        res.json(resources)

    } catch (err) {
        next (err)
    }
})

//-----------------------------------------------------------------------------
// (CREATE) ADDS PROJECT
//-----------------------------------------------------------------------------
router.post('/projects', (req, res) => {
    const projectData = req.body;
    data.addProject(projectData)
    .then(project => {
        res.status(201).json({
            Success: "Project " + project + "was successfully created,"
                })
            })
    .catch(error => {
        res.status(500).json({
            Error:"Failed to create project. Please contact administrator."
        })
    })
})

//-----------------------------------------------------------------------------
// (CREATE) ADDS TASK
//-----------------------------------------------------------------------------
router.post('/tasks', (req, res) => {
    const taskData = req.body;
    data.addTask(taskData)
    .then(task => {
        res.status(201).json({
            Success: "Task " + task + "was successfully created,"
                })
            })
    .catch(error => {
        res.status(500).json({
            Error:"Failed to create task. Please contact administrator."
        })
    })
})

//-----------------------------------------------------------------------------
// (CREATE) ADDS Resource
//-----------------------------------------------------------------------------
router.post('/resources', (req, res) => {
    const resourceData = req.body;
    data.addResource(resourceData)
    .then(resource => {
        res.status(201).json({
            Success: "Resource " + resource + "was successfully created,"
                })
            })
    .catch(error => {
        res.status(500).json({
            Error:"Failed to create resource. Please contact administrator."
        })
    })
})

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// GETS ALL TASKS FOR PROJECT ID
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
router.get('/projects/:id/tasks', async (req, res, next) => {
    try {
        const project_tasks = await data.getProjectTasks(req.params.id)
        res.json(project_tasks)
    } catch (err) {
        next(err)
    }
})

//-----------------------------------------------------------------------------
// GETS ALL RESOURCES FOR PROJECT ID
//-----------------------------------------------------------------------------
router.get('/pr/:id', async (req, res, next) => {
    try {
        const project_resources = await data.getPR(req.params.id)
        res.json(project_resources)
    }catch (err) {
        next(err)
    }
})

module.exports = router;