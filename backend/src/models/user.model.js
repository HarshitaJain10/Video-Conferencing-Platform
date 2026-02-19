import mongoose,{Schema} from "mongoose"

const userSchema=new Schema({

    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    token:{
        type:String,
        
    },
})
const User=mongoose.model("User",userSchema);
export {User};  //to return in the form of arr-if we want to add smthng later