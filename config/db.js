const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Connect to server 
const connectDB = async () => {
    try {
        await mongoose.connect(db);

        console.log("MongoDB database connected...")
    } catch(err){
        console.log(err.message);
        // Exit process with failure
        process.exit(1)
    }
}


module.exports = connectDB;