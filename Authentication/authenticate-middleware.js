const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

   if (token){
        jwt.verify(token,process.env.JWT_SECRET || 'oaijdjoijgoija', (err, decodedToken) =>{
            if(err){
                res.status(401).json({you: 'shall not pass'})
            } else {
                req.user = decodedToken;
                next();
            }
        })
   } else{
       res.status(400).json({ message: "no authorization token given"});
   }
};
