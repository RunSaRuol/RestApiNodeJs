const Project = require('../models/project.model');
module.exports ={
    index : (req,res,next)=>{ 
        Project.find({})
        .then(projects=>{
            console.log(projects);
            res.status(200).json(projects);
    
        })  
    //     res.status(200).json({
    //         message: 'You requested index project page'
    //     })
    .catch(err=>{
        next(err);
     })


    },
    newProject : (req,res,next)=>{
        const newProject = new Project(req.body);
        newProject.save()
             .then(project =>{
                 console.log(project);
                 res.status(201).json(project);
             })
             .catch(err=>{
                next(err);
             })
     },  
}