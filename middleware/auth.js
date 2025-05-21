const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET;


const verifyToken = (req, res, next) => {

    const tokenHeader = req.headers["authorization"];
    const accessToken = tokenHeader && tokenHeader.split(" ")[1];


    if (!accessToken) {
        return res.status(401).send("Access Denied. No token provided.");
    }

    try {
        const decoded = jwt.verify(accessToken, secretKey);

        req.user = decoded;
        
        // req.type = decoded.type;
        next();
    } catch (error) {
        console.error(error)
        return res.status(407).send("Invalid Token.");
    }
    
}






module.exports = {
    verifyToken,
} 
