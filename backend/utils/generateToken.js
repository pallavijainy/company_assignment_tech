
const jwt  = require("jsonwebtoken");


exports.generateToken = async(user)=>{
    const token = await jwt.sign({_id:user?._id , email:user?.email}, process.env.SECRET_KEY, {expiresIn:"30d"})
    return token;
}