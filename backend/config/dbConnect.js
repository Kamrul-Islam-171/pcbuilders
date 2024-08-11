
import mongoose from "mongoose"

const dbConnect = async () => {
    // if(mongoose.connection.readyState >= 1) return;

    // mongoose.connect(process.env.DB_URI)

    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("MongoDB Connected!")
    } catch (error) {
        console.log("Error Connecting to mongoDB ", error)
    }
}

export default dbConnect;