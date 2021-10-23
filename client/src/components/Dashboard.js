import React from 'react';
import NavBar from './NavBar';
import ProfileCard from './ProfileCard';

function Dashboard(props) {
    return (
        <div>
            <NavBar/>
            <div className="d-flex justify-content-center flex-wrap" style={{padding: "40px 80px"}}>
                <ProfileCard/>
                <ProfileCard/>
                <ProfileCard/>
            </div>
            
        </div>
    );
}

export default Dashboard;