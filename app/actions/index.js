import axios from 'axios'
import history from '../store/history';

let token = sessionStorage.getItem('csrf');
    token = token ? token : '';

const  instance = axios.create({
    baseURL: '/api/',
    headers: { csrf: token }
  });

  const redirect = (err) => {
    if(err.response.status == 401){
        history.push('/unauth')
    } else if(err.response.status == 504) {
        alert('Something Went Wrong!! Please retry.');
        history.push('/login')
    }
}


export const addUserDetails = (data) => {
    return {
        type: "LOGIN",
        payload: {
            username: data.username
        }
    }
}

export const setError = (data) => {
    return {
        type: "SET_LOGIN_ERROR",
        payload: {
            error: data,
        }
    }
}

export const setSwapiData = (data) => {
    return {
        type: "SET_SWAPI_DATA",
        payload: {
            featureList: data,
        }
    }
}

 

export const categoryData = (data) => {
    return {
        type: "SET_CATEGORY_DATA",
        payload: {
            ...data
        }
    }
}


export  const  loginAction = (data) => {  
    return (dispach) => {

        instance.post('login', {
            username: data.username,
            password : data.password
        })
        .then((response) => { 
            if(response.data.success){
                sessionStorage.setItem('csrf', response.data.token);
                sessionStorage.setItem('username', data.username);
                dispach(setError(false));
                dispach(addUserDetails(data));
                history.push('dashboard');

            } else {
                dispach(setError(response.data.message[0]));
            }
        })
        .catch(error => console.log(error));
    }
}

export const getList = () => {
    return (dispach) => {
        instance.get('swapi')
        .then( (response) => {
            if(response.data){
                dispach(setSwapiData(response.data));
            }
        })
        .catch((err) => {
            redirect(err);
            
        });
    }
}



export const getCategoryData = (data) => {
    return (dispach) => {
        instance.post(`swapi/${data}`, {
            type : data
        })
        .then( (response) => { 
            if(response.data){
                let finalData = {};
                finalData[data] = response.data

               dispach(categoryData(finalData));
            }
        })
        .catch((err) => {
            redirect(err);
        });
    }
}


 

export const logOut = () => {
    return (dispach) => {
        instance.post('logout')
        .then( (response) => { 
            if(response.data){
                history.push('/');
            }
        })
        .catch((err) => {
            redirect(err);
        });
    }
}
