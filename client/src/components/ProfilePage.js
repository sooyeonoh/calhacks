import React from 'react';
import NavBar from './NavBar';
import { Card } from 'react-bootstrap';
import InfoTag from './InfoTag';

function ProfilePage(props) {
    return (
        <div>
        <NavBar/>
        <Card border="light" style={{margin: "10px", padding: '10px 15px'}}>
            <Card.Body>
                <div className="mb-5">
                    <h1 style={{fontSize: '150px'}}>{"🧸"}</h1>
                    <Card.Title style={{fontSize: '70px'}}>{"cal student"}</Card.Title>
                    <Card.Text className="fw-bold" style={{fontSize: '25px'}}>{"computer science"}, {2023}</Card.Text>
                    <Card.Text className="fst-italic" style={{fontSize: '20px'}}>"{"study and chill?"}"</Card.Text>
                </div>

                <div className="d-flex flex-column align-items-start">
                    <div className="d-flex flex-column align-items-start mb-4">
                        <Card.Title style={{fontSize: '22 px'}}>Personality</Card.Title>
                        <div>
                            <InfoTag type="primary" info={"INTP"}/>
                            <InfoTag type="dark" info={"Sagittarius"}/>
                            <InfoTag type="warning" info={"Ravenclaw"}/>
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-start mb-4">
                        <Card.Title style={{fontSize: '22 px'}}>Interests</Card.Title>
                        <div>
                            <InfoTag type="secondary" info={"R&B"}/>
                            <InfoTag type="secondary" info={"Muracci's"}/>
                        </div>
                    </div>

                </div>

            </Card.Body>
        </Card>
        </div>
    );
}

export default ProfilePage;