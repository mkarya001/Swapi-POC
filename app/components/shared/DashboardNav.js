import React from 'react';

const DashboardNav = (props) => {
    const { signOut } = props;
    const username = sessionStorage.getItem('username') || '';
    return (
        <div className="dashboardnav">
            Hi {username}! 
            <div onClick={ent => signOut()}>Sign Out</div>
        </div>
    )
}

export default DashboardNav;