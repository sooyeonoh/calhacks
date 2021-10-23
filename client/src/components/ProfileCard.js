import React from 'react';
import { Card } from 'react-bootstrap';
import InfoTag from './InfoTag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

function ProfileCard(props) {
    return (
        <Card style={{ width: '20rem', height: '100%', margin: "10px"}}>
            <Card.Body style={{padding: '10px 15px'}}>
                <div className="mb-3">
                    <h2 style={{fontSize: '60px'}}>{props.data.emoji}</h2>
                    <Card.Title style={{fontSize: '28px'}}>{props.name}</Card.Title>
                    <Card.Text className="fw-bold">{props.data.major}, {props.data.year}</Card.Text>
                    <Card.Text className="fst-italic" style={{fontSize: '20px'}}>"{props.data.bio}"</Card.Text>
                </div>

                <div className="d-flex flex-column align-items-start">
                    <div className="d-flex flex-column align-items-start mb-3">
                        <Card.Title style={{fontSize: '18px'}}>Personality</Card.Title>
                        <div>
                            <InfoTag type="primary" info={props.interests.mbti}/>
                            <InfoTag type="dark" info={props.interests.astrology}/>
                            <InfoTag type="warning" info={props.interests.hogwarts}/>
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-start mb-4">
                        <Card.Title style={{fontSize: '18px'}}>Interests</Card.Title>
                        <div>
                            <InfoTag type="secondary" info={props.interests.music}/>
                            <InfoTag type="secondary" info={props.interests.berkeley_restaurant}/>
                        </div>
                    </div>

                </div>
            </Card.Body>

            <Card.Footer style={{padding: '10px 30px'}}>
                <div className="d-flex flex-row justify-content-between" style={{width: '100%'}}>
                    <ThumbDownIcon className="dislike" style={{color: 'darkgray', width: '30px', height: 'auto'}}/>
                    <FavoriteBorderIcon className="like" style={{color: 'red', width: '30px', height: 'auto'}}/>
                </div>
            </Card.Footer>

        </Card>
    );
}

export default ProfileCard;