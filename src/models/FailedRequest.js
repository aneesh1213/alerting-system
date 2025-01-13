import mongoose from "mongoose";


const failedRequestSchema = new mongoose.Schema({
    ip:String, 
    timestamp : Date,
    reason : String
})

export default mongoose.model("FailedRequest", failedRequestSchema);

