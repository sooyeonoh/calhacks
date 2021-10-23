import React from 'react';
import { Card } from 'react-bootstrap';
import InfoTag from './InfoTag';

function ProfileCard(props) {
    return (
        <Card style={{ width: '20rem', height: '500px', margin: "10px"}}>
            <Card.Body>
                <h1 style={{fontSize: '70px'}}>{props.data.emoji}</h1>
                <Card.Title style={{fontSize: '28px'}}>{props.name}</Card.Title>
                <Card.Text className="fst-italic">{props.data.bio}</Card.Text>
                <InfoTag type="primary" info={props.data.year}/>
                <InfoTag type="secondary" info={props.data.major}/>
            </Card.Body>
        </Card>
    );
}

export default ProfileCard;