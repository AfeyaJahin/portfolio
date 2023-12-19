const Experience = require('../models/Experience'); // Replace with your actual model

exports.getAllExperiences = async (req, res) => {
    try {
        const experiences = await Experience.find();
        res.json(experiences);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getExperienceById = async (req, res) => {
    try {
        const experience = await Experience.findById(req.params.id);
        if (!experience) return res.status(404).json({ message: 'Experience not found' });
        res.json(experience);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createExperience = async (req, res) => {
    const experience = new Experience(req.body);
    try {
        const newExperience = await experience.save();
        res.status(201).json(newExperience);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateExperience = async (req, res) => {
    try {
        const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!experience) return res.status(404).json({ message: 'Experience not found' });
        res.json(experience);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteExperience = async (req, res) => {
    try {
        const experience = await Experience.findByIdAndDelete(req.params.id);
        if (!experience) return res.status(404).json({ message: 'Experience not found' });
        res.json({ message: 'Experience deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
