import React from 'react';
import NavBar from './NavBar';
import { Card } from 'react-bootstrap';
import InfoTag from './InfoTag';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function EditButton(props) {
    return (
        <Button variant="info" onClick={props.onClick}>
            Edit
        </Button>
    );
}

function EditState(props) {
    return (
        <Card border="light" style={{margin: "10px", padding: '10px 15px'}}>
                    <Card.Body>
                    <div className="mb-5">
                        <h1 style={{fontSize: '150px'}}>{"🧸"}</h1>
                        <Card.Title style={{fontSize: '70px'}}>{"cal student"}</Card.Title>
                        <Row className="g-2">
                            <Col md>
                                <FloatingLabel controlId="floatingInputGrid" label="Major">
                                <Form.Control type="text" placeholder="Major" />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                            <FloatingLabel controlId="floatingSelectGrid" label="Year">
                                <Form.Select aria-label="Year">
                                    <option>...</option>
                                    <option value="1">2022</option>
                                    <option value="2">2023</option>
                                    <option value="3">2024</option>
                                    <option value="4">2025</option>
                                </Form.Select>
                        </FloatingLabel>
                    </Col>
                    </Row>
                        <div>
                            <FloatingLabel controlId="floatingInputGrid" label="Bio">
                            <Form.Control type="text" placeholder="Tell us about yourself!" />
                            </FloatingLabel>
                        </div>
                    </div>

                    <div>
                    <div className="d-flex flex-column align-items-start">
                        <Card.Title style={{fontSize: '22 px'}}>Personality</Card.Title>
                        </div>
                        <div className="d-flex flex-column align-items-stretch mb-4">
                            <div>
                            <Row className="g-2">
                            <Col md>
                            <FloatingLabel controlId="floatingSelect" label="MBTI">
                                <Form.Select aria-label="MBTI">
                                    <option>...</option>
                                    <option value="1">ISTJ</option>
                                    <option value="2">ISTP</option>
                                    <option value="3">ISFJ</option>
                                    <option value="4">ISFP</option>
                                    <option value="5">INFJ</option>
                                    <option value="6">INFP</option>
                                    <option value="7">INTJ</option>
                                    <option value="8">INTP</option>
                                    <option value="9">ESTP</option>
                                    <option value="10">ESTJ</option>
                                    <option value="11">ESFP</option>
                                    <option value="12">ESFJ</option>
                                    <option value="13">ENFP</option>
                                    <option value="14">ENFJ</option>
                                    <option value="15">ENTP</option>
                                    <option value="16">ENTJ</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        <Col md>
                            <FloatingLabel controlId="floatingSelect" label="Zodiac Sign">
                                <Form.Select aria-label="Zodiac sign">
                                    <option>...</option>
                                    <option value="1">Aries</option>
                                    <option value="2">Taurus</option>
                                    <option value="3">Gemini</option>
                                    <option value="4">Cancer</option>
                                    <option value="5">Leo</option>
                                    <option value="6">Virgo</option>
                                    <option value="7">Libra</option>
                                    <option value="8">Scorpio</option>
                                    <option value="9">Sagittarius</option>
                                    <option value="10">Capricorn</option>
                                    <option value="11">Aquarius</option>
                                    <option value="12">Pisces</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        <Col md>
                        <FloatingLabel controlId="floatingSelect" label="Hogwarts House">
                            <Form.Select aria-label="Hogwarts House">
                                <option>...</option>
                                <option value="1">Gryffindor</option>
                                <option value="2">Slytherin</option>
                                <option value="3">Ravenclaw</option>
                                <option value="4">Hufflepuff</option>
                            </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    </div>
                </div>
            
                    <div className="d-flex flex-column align-items-start mb-4">
                        <Card.Title style={{fontSize: '22 px'}}>Interests</Card.Title>
                        </div>
                        <div className="d-flex flex-column align-items-stretch mb-4">
                            <div>
                            <Row className="g-2">
                            <Col md>
                            <FloatingLabel controlId="floatingSelect" label="Favorite Music Genre">
                                <Form.Select aria-label="music">
                                    <option>...</option>
                                    <option value="1">Pop</option>
                                    <option value="2">Alternative Rock</option>
                                    <option value="3">Hip-Hop/Rap</option>
                                    <option value="4">Indie</option>
                                    <option value="5">R&B/Soul</option>
                                    <option value="6">EDM</option>
                                    <option value="7">Classical</option>
                                    <option value="8">KPop</option>
                                    <option value="9">Reggaeton/Latin</option>
                                    <option value="10">Country</option>
                                    <option value="11">Cultural</option>
                                    <option value="12">Jazz/Blues</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        <Col md>
                            <FloatingLabel controlId="floatingSelect" label="Favorite Spot on Durant">
                                <Form.Select aria-label="Berkeley Restaurant">
                                    <option>...</option>
                                    <option value="1">D'Yar</option>
                                    <option value="2">IB's</option>
                                    <option value="3">La Burrita (Southside)</option>
                                    <option value="4">Thai Basil</option>
                                    <option value="5">Gypsy's</option>
                                    <option value="6">Kimchi Garden</option>
                                    <option value="7">Super Duper</option>
                                    <option value="8">Top Dog</option>
                                    <option value="9">Taco Bell</option>
                                    <option value="10">Tacos Sinaloa</option>
                                    <option value="11">Koja Kitchen</option>
                                    <option value="12">Bunz</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                    </Row>
                    </div>
                </div>

                <div className="d-flex flex-column align-items-start mb-4">
                        <Card.Title style={{fontSize: '22px'}}>Relationships</Card.Title>
                        <div>
                           <div className="d-flex flex-column align-items-stretch mb-4">
                            <div>
                            <Row className="g-2">
                            <Col md>
                            <FloatingLabel controlId="floatingSelect" label="What I'm Looking For">
                                <Form.Select aria-label="looking_for">
                                    <option>...</option>
                                    <option value="1">Friends</option>
                                    <option value="2">Study Buddy</option>
                                    <option value="3">Something Casual</option>
                                    <option value="4">Hookups</option>
                                    <option value="5">See Where it Goes</option>
                                    <option value="6">Dates</option>
                                    <option value="7">Relationship</option>
                                    <option value="8">Unsure</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        <Col md>
                            <FloatingLabel controlId="floatingSelect" label="My Ideal Date...">
                                <Form.Select aria-label="Berkeley Restaurant">
                                    <option>...</option>
                                    <option value="1">Picnic on the Glade</option>
                                    <option value="2">Netflix and Chill</option>
                                    <option value="3">Walks on the beach</option>
                                    <option value="4">Candlelit Dinner</option>
                                    <option value="5">Performance Art</option>
                                    <option value="6">Painting at the Park</option>
                                    <option value="7">Movie Night</option>
                                    <option value="8">Kareoke at Jaguar</option>
                                    <option value="9">Sushi and Sunset</option>
                                    <option value="10">Going to Concert</option>
                                    <option value="11">Skateboard Sesh</option>
                                    <option value="12">Art Museum Visit</option>
                                    <option value="13">Book Store Browsing</option>
                                    <option value="14">SF Adventure</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </Card.Body>
        </Card>
    )
}

function DoneEditButton(props) {
    return (
        <Button variant="info" onClick={props.onClick}>
            Done Editing
        </Button>
    );
}

function NormalState(props) {
    return (
    <Card className="NormalState">
        <Card border="light" style={{margin: "10px", padding: '10px 60px'}}>
            <Card.Body>
                <div className="mb-5">
                <h1 style={{fontSize: '150px'}}>{"🧸"}</h1>
                    <Card.Title style={{fontSize: '70px'}}>{"cal student"}</Card.Title>
                    <Card.Text className="fw-bold" style={{fontSize: '25px'}}>{"computer science"}, {2023}</Card.Text>
                    <Card.Text className="fst-italic" style={{fontSize: '20px'}}>"{"study and chill?"}"</Card.Text>
                </div>

                <div className="d-flex flex-column align-items-start">
                    <div className="d-flex flex-column align-items-start mb-4">
                    
                        <Card.Title style={{fontSize: '35 px'}}>Personality</Card.Title>
                        <div>
                            <h3><InfoTag type="primary" info={"INTP"}/>
                            <InfoTag type="dark" info={"Sagittarius"}/>
                            <InfoTag type="warning" info={"Ravenclaw"}/></h3>
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-start mb-4">
                        <Card.Title style={{fontSize: '22 px'}}>Interests</Card.Title>
                        <div>
                            <h3><InfoTag type="secondary" info={"R&B"}/>
                            <InfoTag type="secondary" info={"Muracci's"}/></h3>
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-start mb-4">
                        <Card.Title style={{fontSize: '22px'}}>Relationships</Card.Title>
                        <div>
                            <h3><InfoTag type="danger" info={"See Where it Goes"} style={{fontSize: '22px'}} />
                            <InfoTag type="dark" info={"Dinner + Sunset"} style={{fontSize: '22px'}} /></h3>
                        </div>
                    </div>
                </div>

                </Card.Body>
            </Card>
        </Card>
    )
}

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDoneEditClick = this.handleDoneEditClick.bind(this);
        this.state = {isEditing: false};
    }
    
    handleEditClick() {
        this.setState({isEditing: true});
    }

    handleDoneEditClick() {
        this.setState({isEditing: false});
    }

    render() {
        const isEditing = this.state.isEditing;
        let editButton;
        if (isEditing) {
            editButton  = <DoneEditButton onClick ={this.handleDoneEditClick}/>;
        } else {
            editButton = <EditButton onClick={this.handleEditClick} />;
        }

        return (
            <div>
            <NavBar/>
            {isEditing ? <EditState/> : <NormalState/>}
            {editButton}
            </div>
        );
    }
}

export default ProfilePage;