const mongoose = require("mongoose");

const connectDB = async () => {

    try {
        console.log("connection is done...!!!!",process.env.MONGODB_ATLAS_CONNECTION_STRING);
        await mongoose.connect(process.env.MONGODB_ATLAS_CONNECTION_STRING);
        console.log("MOngoose connected successfully");

    } catch (error) {
        console.log("MOngoDB connection error",error)
        process.exit(1);

    }
}
module.exports = connectDB