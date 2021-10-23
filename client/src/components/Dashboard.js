import React from 'react';
import NavBar from './NavBar';
import ProfileCard from './ProfileCard';
import profiles from '../profiles.js';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Dashboard(props) {
    return (
        <div>
            <NavBar/>
            <div className="d-flex flex-row align-items-center" style={{padding: '0 40px'}}>
                <ArrowBackIosIcon/>
                <div id="carousel" className="d-flex justify-content-center flex-wrap" style={{padding: "40px 80px"}}>
                    {profiles.map(profile => 
                        <ProfileCard 
                            name={profile.name}
                            data={profile.data}
                            interests={profile.interests}
                            preferences={profile.preferences}
                        />)}
                </div>
                <ArrowForwardIosIcon/>
            </div>
        </div>
    );
}

export default Dashboard;