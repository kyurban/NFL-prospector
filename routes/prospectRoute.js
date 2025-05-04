const express = require("express");
const router = express.Router();
const prospectController = require("../controllers/prospectController");

router.get('/', prospectController.getAllProspects);
router.get('/first_name/:first_name', prospectController.getProspectByFirstName);
router.get('/last_name/:last_name', prospectController.getProspectByLastName);
router.get('/name/full', prospectController.getProspectByFullName);
router.get('/position/:position', prospectController.getProspectByPos);
router.get('/college/:college', prospectController.getProspectByCollege);
router.get('/age/:age', prospectController.getProspectByAge);
router.get('/height/:height', prospectController.getProspectByHeight);
router.get('/weight/:weight', prospectController.getProspectByWeight);
router.post('/', prospectController.addProspect);
router.get('/:id', prospectController.getProspectById);
router.put('/:id', prospectController.updateProspect);
router.delete('/:id', prospectController.deleteProspect);

module.exports = router;