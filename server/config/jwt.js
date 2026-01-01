const jwt=require("jsonwebtoken");

const genarateToken=(userId)=>{
    return jwt.sign(
        {id:userId},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    );
};

const verifyToken=(token)=>{
    return jwt.verifiy(token, process.env.JWT_SECRET);
};

module.exports={
    genarateToken,
    verifyToken
};