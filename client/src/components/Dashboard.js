import React from 'react';
import NavBar from './NavBar';
import ProfileCard from './ProfileCard';
import profiles from '../profiles.js';

function Dashboard(props) {
    return (
        <div>
            <NavBar/>
            <div className="d-flex justify-content-center flex-wrap" style={{padding: "40px 80px"}}>
                {profiles.map(profile => 
                    <ProfileCard 
                        name={profile.name}
                        data={profile.data}
                        interests={profile.interests}
                        preferences={profile.preferences}
                    />)}
            </div>
            
        </div>
    );
}

export default Dashboard;