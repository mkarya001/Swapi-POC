
module.exports = (passport, localStrategy, jwt) => { 
  
    let userAuth = {};

    userAuth.login =  (req, res, next) => {
        passport.authenticate('login', (err, user) => {
            
            if(err){ throw err};
            if(!user){
                return res.json({ success : false, message: req.flash('error') });
            } 
            req.login(user, (err) => {
                 if (err) {   return next(err); }
                var token = jwt.sign({username: user.username}, 'Q3UBzdH9GEfiRCTKbi5MTPyChpzXLsTD25#2sd6*%!#52#@4Hoh@#', { expiresIn: 60 * 60 * 14});
			  	return res.json({ success : true, message : req.flash('success'),  token: token });
                
            });


        })(req, res, next)
    }

    userAuth.logout = (req, res, next) => {
        req.logout();
        res.json({success: true})
    }

 return userAuth; 
}