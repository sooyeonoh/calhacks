import React from 'react';
import { Card } from 'react-bootstrap';
import InfoTag from './InfoTag';

function ProfileCard(props) {
    return (
        <Card style={{ width: '20rem', height: '500px', margin: "10px", padding: '10px 15px'}}>
            <Card.Body>
                <div className="mb-5">
                    <h1 style={{fontSize: '70px'}}>{props.data.emoji}</h1>
                    <Card.Title style={{fontSize: '28px'}}>{props.name}</Card.Title>
                    <Card.Text className="fw-bold">{props.data.major}, {props.data.year}</Card.Text>
                    <Card.Text className="fst-italic" style={{fontSize: '20px'}}>"{props.data.bio}"</Card.Text>
                </div>

                <div className="d-flex flex-column align-items-start">
                    <div className="d-flex flex-column align-items-start mb-4">
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
        </Card>
    );
}

export default ProfileCard;