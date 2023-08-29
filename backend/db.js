const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook" 

const connectToMongo = () => {
        mongoose.connect(mongoURI, ()=>{
            console.log("connnected to mongo successfully")
        } )
}

module.exports = connectToMongo;