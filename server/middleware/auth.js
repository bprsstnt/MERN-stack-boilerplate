const { User } = require("../models/user");

let auth = (req, res, next) => {
    // get token from the client cookie
    let token = req.cookies.x_auth;
    
    // decode token and find the user
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({
            isAuth: false,
            error: true
        });

        req.token = token;
        req.user = user;
        next();
    });
}

module.exports = { auth };