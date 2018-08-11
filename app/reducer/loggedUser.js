 
const defaultState = {
   username: ''
};

const loggedUser = (state = defaultState, action) => {
    switch(action.type){ 
        case "LOGIN" :
        return {...state, ...action.payload}
        break

        case "SET_SWAPI_DATA" : 
        return {...state, ...action.payload}
        
        break
        case "SET_CATEGORY_DATA" :
        return {...state, ...action.payload}
        break
    }

    
    return state;     
}
 

export default  loggedUser;