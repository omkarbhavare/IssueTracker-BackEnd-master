const mongoose =require('mongoose');


const issueSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true,
      },
      author: {
        type: String,
        trim: true,
        required: true,
      },
      labels: [
        {
          type: String,
          trim: true,
          required: true,
        }
            ],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }
},{
    timestamps: true
});

const Issue =  mongoose.model('Issue',issueSchema);
module.exports = Issue;