module.exports = (app, passport, localStrategy, jwt) => { 
   
    const authRoute = require('./authRoute')(app, passport, localStrategy, jwt); 
    const swapiRoute = require('./swapiRoute')(app, jwt);   
    
    return {authRoute, swapiRoute};
}