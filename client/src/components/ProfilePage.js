import React from 'react';
import NavBar from './NavBar';
import { Card } from 'react-bootstrap';
import InfoTag from './InfoTag';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
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
                    <Card.Text className="fw-bold" style={{fontSize: '25px'}}>{"computer science"}, {2023}</Card.Text>
                    <Card.Text className="fst-italic" style={{fontSize: '20px'}}>"{"study and chill?"}"</Card.Text>
                </div>

                <div className="d-flex flex-column align-items-start">
                    <div className="d-flex flex-column align-items-start mb-4">
                    
                        <Card.Title style={{fontSize: '22 px'}}>Personality</Card.Title>
                        <div>
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
                        </div>
                        <div>
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
                        </div>
                        <div>
                        <FloatingLabel controlId="floatingSelect" label="Hogwarts House">
                            <Form.Select aria-label="Hogwarts House">
                                <option>...</option>
                                <option value="1">Gryffindor</option>
                                <option value="2">Slytherin</option>
                                <option value="3">Ravenclaw</option>
                                <option value="4">Hufflepuff</option>
                            </Form.Select>
                            </FloatingLabel>
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
    )
}

function editingPage(props) {
    const isEditing = props.isEditing;
    if (isEditing) {
        return <editState/>;
    } 
    return <NormalState/>;
}

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDoneEditClick = this.handleDoneEditClick.bind(this);
        this.state = {
            isEditing: false,
        };
    }
    
    handleEditClick() {
        this.setState({isEditing: true})
    }

    handleDoneEditClick() {
        this.setState({isEditing: false})
    }

    handleClick() {
        const page = this.state.slice();
        this.setState({
            edit: !this.state.edit,
        });
    }

    render() {
        const isEditing = this.state.isEditing;
        let editButton;
        if (isEditing) {
            editButton  = <DoneEditButton onClick ={this.handleDoneEditClick} />;
        } else {
            editButton = <EditButton onClick={this.handleEditClick} />;
        }

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
                        <div>
                            <InfoTag type="secondary" info={"R&B"}/>
                            <InfoTag type="secondary" info={"Muracci's"}/>
                        </div>
                    </div>
                </div>

            </Card.Body>
        </Card>
                {editButton}
            </div>
    );
    }
}

export default ProfilePage;