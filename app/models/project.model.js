const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema  =new Schema({
    name: String,
    desc: String,
    tasks:[{
        type: Schema.Types.ObjectId,
        ref:'task'
    }]

});

const Project =mongoose.model('project', projectSchema);
module.exports = Project;