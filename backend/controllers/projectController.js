const Project = require('../models/project'); // adjust the path to where your model is stored

const projectController = {
  // Get all projects
  getAllProjects: async (req, res) => {
    try {
      const projects = await Project.find();
      res.json(projects);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Get a single project by ID
  getProjectById: async (req, res) => {
    try {
      const project = await Project.findById(req.params.id);
      if (!project) return res.status(404).json({ message: 'Project not found' });
      res.json(project);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Create a new project
  createProject: async (req, res) => {
    const project = new Project(req.body);
    try {
      const newProject = await project.save();
      res.status(201).json(newProject);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Update a project by ID
  updateProject: async (req, res) => {
    try {
      const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!project) return res.status(404).json({ message: 'Project not found' });
      res.json(project);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Delete a project by ID
  deleteProject: async (req, res) => {
    try {
      const project = await Project.findByIdAndDelete(req.params.id);
      if (!project) return res.status(404).json({ message: 'Project not found' });
      res.json({ message: 'Project deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = projectController;
