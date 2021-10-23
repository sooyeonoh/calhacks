import React from 'react';
import NavBar from './NavBar';
import ProfileCard from './ProfileCard';
import profiles from '../profiles.js';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Dashboard(props) {
    var index = 0;
    var amount = 0;
    var currTransl = []
    var translationComplete = true;

    var transitionCompleted = function(){
        translationComplete = true;
    }

    document.addEventListener("DOMContentLoaded", function(event) 
    {
        amount = document.getElementsByClassName('ProfileCard').length;
        var carousel = document.getElementById('carousel');
        carousel.style.width = 400*amount+'px';

        for(var i = 0; i < amount; i++)
        {
            currTransl[i] = -400;
            document.getElementsByClassName('ProfileCard')[i].addEventListener("transitionend", transitionCompleted, true);                    
            document.getElementsByClassName('ProfileCard')[i].addEventListener("webkitTransitionEnd", transitionCompleted, true);                    
            document.getElementsByClassName('ProfileCard')[i].addEventListener("oTransitionEnd", transitionCompleted, true);                    
            document.getElementsByClassName('ProfileCard')[i].addEventListener("MSTransitionEnd", transitionCompleted, true);                  
        }
    });

    function moveRight()
    {
        if(translationComplete === true)
        {
            translationComplete = false;
            index--;
            if(index == -1)
            {
                index = amount-1;
            }
            var outerIndex = (index) % amount;

            for(var i = 0; i < amount; i++)
            {
                var img = document.getElementsByClassName('ProfileCard')[i];    
                img.style.opacity = '1';    
                img.style.transform = 'translate('+(currTransl[i]+400)+'px)';
                currTransl[i] = currTransl[i]+400;
            }
            
            var outerImg = document.getElementsByClassName('ProfileCard')[outerIndex];
            outerImg.style.transform = 'translate('+(currTransl[outerIndex]-400*(amount))+'px)';
            outerImg.style.opacity = '0';
            currTransl[outerIndex] = currTransl[outerIndex]-400*(amount);
        }
    }

    function moveLeft()
    {
        if(translationComplete === true)
        {
            translationComplete = false;
            index++;
            var outerIndex = (index-1) % amount;
            
            for(var i = 0; i < amount; i++)
            {
                var img = document.getElementsByClassName('ProfileCard')[i];    
                img.style.opacity = '1';    
                img.style.transform = 'translate('+(currTransl[i]-400)+'px)';
                currTransl[i] = currTransl[i]-400;
            }
            var outerImg = document.getElementsByClassName('ProfileCard')[outerIndex];
            outerImg.style.transform = 'translate('+(currTransl[outerIndex]+400*(amount))+'px)';
            outerImg.style.opacity = '0';
            currTransl[outerIndex] = currTransl[outerIndex]+400*(amount);
        }
    }

    return (
        <div>
            <NavBar/>
            <div className="d-flex flex-row align-items-center justify-content-between" style={{padding: '30px 40px'}}>
                <ArrowBackIosIcon onClick={moveRight}/>
                <div id="frame">
                    <div id="carousel" className="animate">
                        {profiles.map(profile => 
                            <ProfileCard 
                                className="animate"
                                name={profile.name}
                                data={profile.data}
                                interests={profile.interests}
                                preferences={profile.preferences}
                            />)}
                    </div>
                </div>
                <ArrowForwardIosIcon onClick={moveLeft}/>
            </div>
        </div>
    );
}

export default Dashboard;