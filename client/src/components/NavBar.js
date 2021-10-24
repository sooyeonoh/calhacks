import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
    return (
        <div className="ps-5 pe-5 d-flex align-items-center justify-content-between" style={{height: "80px", outline:"1px solid lightGray"}}>
            <div className="d-flex flex-row align-items-center">
                <img src="/bear.png" className="me-2" style={{width: "28px"}} alt="bear" />
                <h3>CalDates</h3>
            </div>
            <div className="d-flex flex-row align-items-center">
                <NavLink className="ps-4 navlink" to="/">Home</NavLink>
                <NavLink className="ps-4 navlink" to="/">Matches</NavLink>
                <NavLink className="ps-4 navlink" to="./ProfilePage">Profile Page</NavLink>
                <NavLink className="ps-4 navlink" to="./ProfileCreator">Sign Up</NavLink>
            </div>
        </div>
    );
}

export default NavBar;