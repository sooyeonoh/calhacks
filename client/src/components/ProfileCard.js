import React from 'react';
import { Card } from 'react-bootstrap';
import InfoTag from './InfoTag';

function ProfileCard(props) {
    return (
        <Card style={{ width: '20rem', height: '500px', margin: "10px"}}>
            <Card.Body>
                <h1>👼</h1>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <InfoTag type="primary" info="Aries"/>
                <InfoTag type="secondary" info="2023"/>
            </Card.Body>
        </Card>
    );
}

export default ProfileCard;