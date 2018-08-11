const  hasingPass = require('./hashing');

module.exports = (passport, localStrategy) => {
    
     // used to serialize the user for the session
     passport.serializeUser((user, done) => {
		done(null, user.username);
    });
 
    // used to deserialize the user
    passport.deserializeUser((user, done) => {
		done(null, user);
    });


    // LOGIN STRATEGY
    
    passport.use("login", new localStrategy({
        usernameField: 'username',  
       passwordField: 'password',
       passReqToCallback: true 
    },

    // callback 
    (req, username, password, done) => {
        const user = [{
            username : 'admin',
            password : hasingPass.encryptPassword('admin')
        }];
            
            if(!user.length){ return done(null, false,  req.flash('error', "No account found with that username."));}

            
            if(!hasingPass.validPassword(password, user[0].password)){   
                return done(null, false,  req.flash('error', "Wrong credential."));
            }
                
            
            return done(null, user[0], req.flash('success', "Logged in successfully."))

        }) 
    )

}