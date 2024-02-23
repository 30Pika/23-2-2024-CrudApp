import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/CrudOne");
    } catch (error) {
        console.log(`Error From Data Base Connection File : ${error}`)
    }
}

export default ConnectDB;