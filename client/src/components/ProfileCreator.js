import React from 'react';
import NavBar from './NavBar';
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
} from 'semantic-ui-react'

class ProfileCreator extends React.Component {

   
    render() {
        return (
            <div>
                <NavBar/>
                <Form>
                    <label>
                        <input
                            type="text"
                            placeholder={"Name"}
                        />
                    </label>
                </Form>
            </div>
        );
    }
}

export default ProfileCreator;
