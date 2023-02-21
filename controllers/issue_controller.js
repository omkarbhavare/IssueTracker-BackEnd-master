const Issue = require("../models/issue");
const Project = require("../models/project");

module.exports.createIssue=function(req,res){
    console.log(req.params.id);
    Project.findById(req.params.id,function(err,project){

        
        console.log(project);
        if(project){
            console.log("c2");
            Issue.create({
                title: req.body.title,
                description: req.body.description,
                labels: req.body.labels,
                author: req.body.author,
                project: req.body.project,
                user: req.body.user
            },function(err,issue){
                if(err){
                    console.log("error in creating issue");
                }
                project.issues.push(issue);
                project.save();

                res.redirect('back')
            });
        }

    })

    
}

