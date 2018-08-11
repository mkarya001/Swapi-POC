

module.exports = (app, passport, localStrategy, jwt) => {    
    const authModel = require('../models/authModel')(passport, localStrategy, jwt);

    

    app.post("/api/login", authModel.login );
    app.post("/api/logout", authModel.logout );

    return app;
}