const Project = require("../models/project");

module.exports.home=function(req,res){
    console.log(req.cookies);

    
    Project.findById(req.params.id,function(err,project){
        console.log(req.params.id);
        Project.find({}).populate('user').exec(function(err,projects){

            return res.render('home',{
                title: "Homepage",
                projects: projects
            })
        
            })
    })
// populate user


}

  