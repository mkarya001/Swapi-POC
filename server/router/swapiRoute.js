

module.exports = (app, passport, localStrategy, jwt) => {    
    
    let  checkAuthentication = (req, res, next) => {    
        if(req.isAuthenticated()){            
            next();
        } else{
            
            const err = new Error('404 Page Not Found');
            err.status = 401;
            next(err);
        }
    } 
    app.use(checkAuthentication);
    const swapiModel = require('../models/swapiModel')(passport, localStrategy, jwt);

    app.get("/api/swapi",  swapiModel.swapi ); 
    app.post("/api/swapi/:category",  swapiModel.category );  

      // Error handler
      app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
        res.status(err.status || 500).json({ error: err });
      });

    return app;
}