const mongoose =require('mongoose');

const projectSchema = mongoose.Schema({
    projectName:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    auther:{
        type: String,
        require: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    issues: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Issue'
        }
    ]
    },
    {
        timestamps: true
    
});

const Project=mongoose.model('Project',projectSchema);
module.exports=Project;