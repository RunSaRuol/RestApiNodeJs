const express =require('express');
const router = express.Router();

const ProjectController = require('../controllers/project.controller');

//content
//False : not localhost:8888/ , true: localhost:8888/project/
router.route('/')
       .get(ProjectController.index)
       .post(ProjectController.newProject);

//Export module
module.exports = router;