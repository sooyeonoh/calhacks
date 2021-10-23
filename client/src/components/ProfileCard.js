import React from 'react';
import { Card } from 'react-bootstrap';

function ProfileCard(props) {
    return (
        <Card style={{ width: '20rem', height: '200px', margin: "10px"}}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProfileCard;