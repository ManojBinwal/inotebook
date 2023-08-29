const mongoose = require ("mongoose")

const Notes = new Schema({
    title: {
        type:String,
        required: true
    },
    description: {
        type : String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    date:{
        type : String,
        default : Date.now
    }

});

module.export = mongoose.model('notes', NotesSchema) 