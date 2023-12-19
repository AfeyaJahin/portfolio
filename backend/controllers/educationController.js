const Education = require('../models/education');

exports.getAllEducation = async (req, res) => {
    try {
        console.log('Attempting to find education entries...');
        const education = await Education.find();
        console.log('Education entries found:', education);
        res.json(education);
    } catch (err) {
        console.error('Error retrieving education entries:', err);
        res.status(500).send('Server Error');
    }
};


exports.addEducation = async (req, res) => {
    try {
        const newEducation = new Education(req.body);
        const education = await newEducation.save();
        res.json(education);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.updateEducation = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedEducation = await Education.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedEducation) {
            return res.status(404).json({ msg: 'Education not found' });
        }
        res.json(updatedEducation);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.deleteEducation = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEducation = await Education.findByIdAndDelete(id);
        if (!deletedEducation) {
            return res.status(404).json({ msg: 'Education not found' });
        }
        res.json({ msg: 'Education deleted' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};



