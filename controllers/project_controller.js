
const Issue = require("../models/issue");
const Project = require("../models/project");
const User = require("../models/user");



// module.exports.createIssue=function(req,res){

//     Issue.create({
//         title: req.body.title,
//         description: req.body.description,
//         labels: req.body.labels,
//         author: req.body.author,
//     },
//     function(err,project){
//         if(err){
//             console.log("error in creating post",err);
//             return;
//         }
//         return res.redirect('back');
//     });
// }

module.exports.create= function(req,res){
    Project.create({
        projectName: req.body.projectName,
        description: req.body.description,
        auther:req.body.auther,
        user: req.user._id
    },function(err,project){
        if(err){
            console.log("error in creating post");
            return;
        }
        return res.redirect('back');
    }) ;   
}





module.exports.openProject=function(req,res){

    console.log(req.params.id);
    Project.findById(req.params.id)
    .populate('user').
    populate({
        path: 'issues',
        populate: {
            path: 'user'
        }
    })
    .exec(function(err,projects)
    
    {
        return res.render('open_project',{

            title: "Project",
            open_projects: projects,
        })
    });

    

}



module.exports.openProject0=function(req,res){


    Project.find({}).
    populate('user')
    .populate({
        path: 'issue',
        populate: {
            path: 'user'
        }
    })
    .exec(function(err,projects)
    
    {
        return res.render('open_project',{

            title: "Project",
            open_projects: projects,
        })
    });

    

}

module.exports.openProject0=function(req,res){


   

    Issue.find({}).populate('project').exec(function(err,issues) { 
        Project.findById(req.params.id,function(err,projects){

            User.findById(req.params.id,function(err,user){

                return res.render('open_project',{
                    title: "project",
                    open_projects: projects,
                    issues:issues,
                    users: user
                    
                    
                })

            })
            
        
        
    })
     })


}

module.exports.destroy=function(req,res){
    Project.findById(req.params.id,function(err,project){
        if(project.user == req.user.id){
            project.remove();
            return res.redirect('back');
        }else{
            return res.redirect('back');
        }
    })
}



module.exports.createIssue=function(req,res){
    console.log(req.params.id);
    Project.findById(req.body.project,function(err,project){

        
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