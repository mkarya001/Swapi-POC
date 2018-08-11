
const axios = require('axios');
axios.create({ 
    headers: {'X-Custom-Header': 'foobar'}
  });
 
module.exports = (passport, localStrategy, jwt) => { 
  
    let swapiModel = {};

    swapiModel.swapi =  (req, res, next) => {
        axios.get('https://swapi.co/api')
            .then(response => {  
                res.json(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    swapiModel.category =  (req, res, next) => {
        const { category } = req.params;
        axios.get('https://swapi.co/api/'+category)
            .then(response => {  
                res.json(response.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }

   
    

 return swapiModel; 
}