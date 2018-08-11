var bcrypt = require('bcrypt-nodejs');

module.exports = { 

	encryptPassword : (password) => {
		return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
	}, 	

	validPassword: (password, currentuser) => { 
	 return bcrypt.compareSync(password, currentuser)
	}	
}