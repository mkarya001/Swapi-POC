import React, {Component} from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux'

import {loginAction, getList} from "../../actions"

class Loginscreen extends Component{

    constructor(props){
        super(props);
        this.loginSubmit = this.loginSubmit.bind(this);
        this.handleInputChages = this.handleInputChages.bind(this);
        this.state = {
            user : {}
        } 
    }

     
    loginSubmit(e){
        e.preventDefault();
        this.props.login(this.state.user); 
     }

    handleInputChages(event){
        const { user } = this.state;
        const { name, value } = event.target; 
        user[name] = value;
    }

    render(){
        const { loginError } = this.props;
        
        return(
            <div>
                
                <div className="login-screen">
                <form onSubmit={this.loginSubmit}>
                    {loginError.error ? (<div className="error">{loginError.error}</div>) : ''}
                    <h2>Login</h2>                    
                    <fieldset>
                        <label>Username</label>
                        <input type="text" placeholder="Type your username" name="username" onChange={this.handleInputChages} required />
                    </fieldset>

                    <fieldset>
                        <label>Password</label>
                        <input type="password" placeholder="Type your password" name="password"  onChange={this.handleInputChages} required/>
                    </fieldset>

                    <div>
                        <button type="submit">submit</button> 
                        
                    </div>
                </form>
            </div>
                    </div>
            
        )
    }

}

export default connect((store) => {
    return {
        loggedUser: store.loggedUser,
        loginError: store.loginError
    }
}, (dispatch) => {

    return bindActionCreators(
        {
            login : loginAction
         }, dispatch
    )
  
})(Loginscreen);