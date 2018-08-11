 
 
const defaultState = {
   error : ''
};

const loginError = (state = defaultState, action) => {
    switch(action.type){ 
        case "SET_LOGIN_ERROR" :
        return {...state, ...action.payload}
        break
    }
    
    return state;     
}
export default  loginError;