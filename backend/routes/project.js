const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();

// GET all projects
router.get('/', projectController.getAllProjects);

// GET a specific project by ID
router.get('/:id', projectController.getProjectById);

// POST a new project
router.post('/', projectController.createProject);

// PUT/update a project by ID
router.put('/:id', projectController.updateProject);

// DELETE a project by ID
router.delete('/:id', projectController.deleteProject);

module.exports = router;
// Path: backend/routes/education.js
