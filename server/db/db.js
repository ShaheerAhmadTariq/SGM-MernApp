

import mongoose from "mongoose"
const connectDB=async ()=>{
    try {
         mongoose.connect(process.env.DB,()=>{
            console.log("db connected")
         })
    } catch (error) {
        console.log(error)
    }
}
export default connectDB
