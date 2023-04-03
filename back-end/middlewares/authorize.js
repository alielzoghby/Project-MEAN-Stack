const jwt = require("jsonwebtoken");
const { JWT_SECRET = 'test' } = process.env;
//require config
module.exports = (req,res,next)=>{
const token = req.header("x-auth-token");
if(!token)
{
    return res.status(401).send("Access denied...");
}
try{
const decodedPayload = jwt.verify(token,JWT_SECRET)
if(!decodedPayload.adminRole) {
    return res.status(401).send("Access denied");
}
next();
}catch(err){
    res.status(400).send("Invalid Token...");
} 


}