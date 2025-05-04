const { Sequelize } = require('sequelize');
const Prospect = require('../models/prospectModel.js');


// get all prospects
const getAllProspects = async (req, res) => {
    try {
        const prospects = await Prospect.findAll();
        res.status(200).json(prospects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get prospects by id
const getProspectById = async (req, res) => {
    try {
        const prospect = await Prospect.findByPk(req.params.id);
        if (!prospect || prospect.length === 0) {
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
        const prospects = await Prospect.findAll({
            where: {
                first_name: { [Sequelize.Op.like]: `%${name}%`}
            }
        });
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
        const prospects = await Prospect.findAll({
            where: {
                last_name: { [Sequelize.Op.like]: `%${name}%`}
            }
        });
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
        const prospects = await Prospect.findAll({
        where: {
            first_name: { [Sequelize.Op.like]: `%${first}%`},
            last_name: { [Sequelize.Op.like]: `%${last}%`}
        }
    });
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
        const prospects = await Prospect.findAll({
            where: {
                position: pos,
            }
        });
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
        const prospects = await Prospect.findAll({
            where: {
                college: {[Sequelize.Op.like]: `%${college}%`}
            }
        });
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
        const prospects = await Prospect.findAll({
            where: {
                age: age,
            }
        });
        if (!prospects || prospects.length === 0) {
            if (age < 20) {
                res.status(404).json({ message: 'Prospects under 20 years old ineligible for draft'});
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
        const prospects = await Prospect.findAll({
            where: {
                height: {[Sequelize.Op.like]: `%${height}%`}
            }
        })
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
        const prospects = await Prospect.findAll({
            where: {
                weight: {[Sequelize.Op.like]: `%${weight}%`}
            }
        })
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
    const { first_name, last_name, position, college, age, height, weight } = req.body;
    try {
        const checkProspect = await Prospect.findOne({
            where: { first_name, last_name, position, college },
        })
        if (checkProspect) {
            res.status(409).json({ message: 'Prospect already exists'})
        }
        const prospect = await Prospect.create({
            first_name,
            last_name,
            position,
            college,
            age,
            height,
            weight,
        });
        res.status(200).json(prospect);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update a prospect by id
const updateProspect = async (req, res) => {
    try {
        const { id } = req.params;
        const { first_name, last_name, position, college, age, height, weight } = req.body;
        const [prospect] = await Prospect.update(
            { first_name, last_name, position, college, age, height, weight },
            { where: { id } }
        )
        if (prospect === 0) {
            const exists = await Prospect.findByPk(id);
            if (!exists) {
              return res.status(404).json({ message: 'Prospect(s) Not Found' });
            }
            return res.status(200).json({ message: 'No changes made' }); // <-- graceful fallback
          }
        const updatedProspect = await Prospect.findByPk(id);
        res.status(200).json(updatedProspect);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// delete a prospect by id
const deleteProspect = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(404).json({ message: 'Prospect(s) Not Found' });
      }
  
      const deleted = await Prospect.destroy({ where: { id } });
  
      if (deleted === 0) {
        return res.status(404).json({ message: 'Prospect(s) Not Found' });
      }
  
      res.status(200).json({ message: 'Prospect entry deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

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