const Education = require('../models/education');

exports.getAllEducation = async (req, res) => {
    console.time('getAllEducation');
    try {
        console.log('Attempting to find education entries...');
        const education = await Education.find();
        console.log('Education entries found:', education);
        res.json(education);
    } catch (err) {
        console.error('Error retrieving education entries:', err);
        res.status(500).send('Server Error');
    }
    console.timeEnd('getAllEducation');
};

exports.addEducation = async (req, res) => {
    console.time('addEducation');
    try {
        console.log('Adding new education entry with data:', req.body);
        const newEducation = new Education(req.body);
        const education = await newEducation.save();
        console.log('New education entry added:', education);
        res.json(education);
    } catch (err) {
        console.error('Error adding new education entry:', err);
        res.status(500).send('Server Error');
    }
    console.timeEnd('addEducation');
};

exports.updateEducation = async (req, res) => {
    console.time('updateEducation');
    try {
        const { id } = req.params;
        console.log(`Updating education entry with id ${id} and data:`, req.body);
        const updatedEducation = await Education.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedEducation) {
            console.warn(`Education entry with id ${id} not found`);
            return res.status(404).json({ msg: 'Education not found' });
        }
        console.log('Education entry updated:', updatedEducation);
        res.json(updatedEducation);
    } catch (err) {
        console.error('Error updating education entry:', err);
        res.status(500).send('Server Error');
    }
    console.timeEnd('updateEducation');
};

exports.deleteEducation = async (req, res) => {
    console.time('deleteEducation');
    try {
        const { id } = req.params;
        console.log(`Deleting education entry with id ${id}`);
        const deletedEducation = await Education.findByIdAndDelete(id);
        if (!deletedEducation) {
            console.warn(`Education entry with id ${id} not found`);
            return res.status(404).json({ msg: 'Education not found' });
        }
        console.log('Education entry deleted:', deletedEducation);
        res.json({ msg: 'Education deleted' });
    } catch (err) {
        console.error('Error deleting education entry:', err);
        res.status(500).send('Server Error');
    }
    console.timeEnd('deleteEducation');
};

