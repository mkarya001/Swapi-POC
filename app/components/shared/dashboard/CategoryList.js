import React from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom'
import history from '../../../store/history';

class CategoryList extends React.Component {
    
    componentWillMount(){
        const { match , loggedUser } = this.props;
        if(!loggedUser || !loggedUser.featureList){
            history.push('/dashboard');
        }
    }
    render() {
        const { match , loggedUser } = this.props;
    const type = match.params.type;
    const list = () => {
        return loggedUser[type] ? loggedUser[type].map( (element, index) => {
           return  <li key={index}>
                        <Link to={`${type}/${index}`} >{element.name}</Link>
                    </li>
        } ) : <p>Please Wait....</p>
    }
    return (
        <div>
            <h1>{type}</h1>
            <ul className="category-list">
                {list()}
            </ul>
        </div>
    )
    }
}

export default connect((store) => { 
    return {
        loggedUser : store.loggedUser,
    }
})(CategoryList);
