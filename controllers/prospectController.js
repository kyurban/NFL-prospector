const Prospect = require('../models/prospectModel.js');


// get all prospects
const getAllProspects = async (req, res) => {
    try {
        const prospects = await Prospect.find();
        res.status(200).json(prospects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get prospects by id
const getProspectById = async (req, res) => {
    try {
        const prospect = await Prospect.findById(req.params.id);
        if (!prospect || prospects.length === 0) {
            return res.status(404).json({ message: 'Prospect not found' });
        }
        res.status(200).json(prospect);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get prospects by first name
const getProspectByFirstName = async (req, res) => {
    try {
        const name = req.params.first_name
        const prospects = await Prospect.find({first_name: { $regex: name, $options: 'i'}});
        if (!prospects || prospects.length === 0) {
            return res.status(404).json({ message: 'Prospect(s) not found' });
        }
        res.status(200).json(prospects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get prospects by last name
const getProspectByLastName = async (req, res) => {
    try {
        const name = req.params.last_name;
        const prospects = await Prospect.find({last_name: {$regex: name, $options: 'i'}});
        if (!prospects || prospects.length === 0) {
            res.status(404).json({ message: 'Prospect(s) Not Found' });
        }
        res.status(200).json(prospects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get prospects by full name
const getProspectByFullName = async (req, res) => {
    try {
        const {first, last} = req.query;
    const prospects = await Prospect.find({first_name: {$regex: first, $options: 'i'}, last_name: {$regex: last, $options: 'i'}});
    if (!prospects || prospects.length === 0) {
        res.status(404).json({ message: 'Prospect(s) Not Found' });
    }
        res.status(200).json(prospects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get prospects by position
const getProspectByPos = async (req,res) => {
    try {
        const pos = req.params.position;
        const prospects = await Prospect.find({position: {$regex: `${pos}$`, $options: 'i'}})
        if (!prospects || prospects.length === 0) {
            res.status(404).json({ message: 'Prospect(s) Not Found'})
        }
        res.status(200).json(prospects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get prospects by college
const getProspectByCollege = async (req, res) => {
    try {
        const college = req.params.college;
        const prospects = await Prospect.find({college: {$regex: college, $options: 'i'}});
        if (!prospects || prospects.length === 0) {
            res.status(404).json({ message: 'Prospect(s) Not Found'});
        }
        res.status(200).json(prospects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get prospects by age
const getProspectByAge = async (req, res) => {
    try {
        const age = req.params.age;
        const prospects = await Prospect.find({age: age});
        if (!prospects || prospects.length === 0) {
            if (age < 20) {
                res.status(404).json({ message: 'Prospects under 20 years old ineligable for draft'});
            }
            res.status(404).json({ message: 'Prospect(s) Not Found'});
        }
        res.status(200).json(prospects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get prospects by height
const getProspectByHeight = async (req, res) => {
    try {
        const height = req.params.height;
        const prospects = await Prospect.find({height: {$regex: `^${height}`}})
        if (!prospects || prospects.length === 0) {
            res.status(404).json({ message: 'Prospect(s) Not Found'});
        }
        res.status(200).json(prospects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get prospects by weight
const getProspectByWeight = async (req, res) => {
    try {
        const weight = req.params.weight;
        const prospects = await Prospect.find({"weight(lbs)": {$regex: `^${weight}`}})
        if (!prospects || prospects.length === 0) {
            res.status(404).json({ message: 'Prospect(s) Not Found'});
        }
        res.status(200).json(prospects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// create a prospect
const addProspect = async (req, res) => {
    try {
        const checkProspect = await Prospect.findOne(req.body)
        if (checkProspect) {
            res.status(409).json({ message: 'Prospect already exists'})
        }
        const prospect = await Prospect.create(req.body);
        res.status(200).json(prospect);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update a prospect by id
const updateProspect = async (req, res) => {
    try {
        const { id } = req.params;
        const prospect = await Prospect.findByIdAndUpdate(id, req.body, {new:true});
        if (!id) {
            res.status(404).json({ message: 'Prospect(s) Not Found'});
        }
        res.status(200).json(prospect);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// delete a prospect by id
const deleteProspect = async (req, res) => {
    try {
        const { id }= req.params;
        if (!id) {
            res.status(404).json({ message: 'Prospect(s) Not Found'});
        }
        await Prospect.findByIdAndDelete(id);
        res.status(200).json({ message: 'Prospect entry deleted successfully'});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllProspects,
    getProspectById,
    getProspectByFirstName,
    getProspectByLastName,
    getProspectByFullName,
    getProspectByPos,
    getProspectByCollege,
    getProspectByAge,
    getProspectByHeight,
    getProspectByWeight,
    addProspect,
    updateProspect,
    deleteProspect
}