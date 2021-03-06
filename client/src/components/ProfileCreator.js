import React, { useState } from 'react';
import NavBar from './NavBar';

import Picker from 'emoji-picker-react';
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'react-bootstrap';


class ProfileCreator extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectAvatar = this.handleSelectAvatar.bind(this);
        this.handleAvatarSelected = this.handleAvatarSelected.bind(this);
        this.state = {
            selectAvatar: false,
            chosenEmoji: "🐻"
        };
    }

    handleSelectAvatar() {
        this.setState({ selectAvatar: true })
    }

    handleAvatarSelected() {
        this.setState({ 
            selectAvatar: false,
            chosenEmoji: "🧘🏻‍♂️"
         })
    }
        
    render() {
        const selectAvatar = this.state.selectAvatar;
        let avatarSelector;
        let avatarPicker = <AvatarPicker />;
        if (selectAvatar) {
            avatarSelector = (
                <div className="d-flex flex-column bd-highlight mb-3 mx-auto">
                    <div className="p-2">
                        {avatarPicker}
                    </div>
                    <div className="p-2">
                        <Button variant="outline-primary" onClick={this.handleAvatarSelected}>Select</Button>
                    </div>
                </div>
            );
        } else {
            avatarSelector = (
                <div className="d-flex flex-column bd-highlight mb-3 mx-auto">
                    <h4 style={{fontSize: '30px'}}>{this.state.chosenEmoji}</h4>
                    <div className="p-2">
                        <Button variant="outline-primary" onClick={this.handleSelectAvatar}>Select Avatar</Button>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <NavBar/>
                <div className="d-flex flex-column justify-content-center" style={{ padding: '30px 40px'}}>
                    <div className="d-flex flex-row bd-highlight mb-3 mx-auto align-items-center">
                        <h3 >Sign Up</h3>
                    </div>
                    <div className="d-flex flex-row bd-highlight mb-3 mx-auto">
                        <div class="input-group first-name" className="p-2">
                            <input type="text" class="form-control" placeholder="First Name" aria-label="First Name"/>
                        </div>
                        <div class="input-group last-name" className="p-2 ">
                            <input type="text" class="form-control" placeholder="Last Name" aria-label="Last Name" />
                        </div>
                    </div>
                    {avatarSelector}
                    <div className="d-flex flex-row bd-highlight mb-3 mx-auto">
                        <div class="dropdown" className="p-2">
                            <select class="form-select" aria-label="Disabled select example">
                                <option selected>School Year</option>
                                <option value="1">Freshman</option>
                                <option value="2">Sophomore</option>
                                <option value="3">Junior</option>
                                <option value="3">Senior</option>
                                <option value="3">Graduate Level</option>
                            </select>
                        </div>
                        <div class="input-group major" className="p-2">
                            <input type="text" class="form-control" placeholder="Major" aria-label="Major" />
                        </div>
                    </div>
                    <div className="d-flex flex-row bd-highlight mb-3 mx-auto">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="School Email" aria-label="School Email" aria-describedby="basic-addon2"/>
                            <div class ="input-group-append">
                            <span class ="input-group-text" id="basic-addon2">@berkeley.edu</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row bd-highlight mb-3 mx-auto">
                        <Button variant="outline-primary">Create Account</Button>
                    </div>
                </div>
            </div>
        );
    }
}

function AvatarPicker(props) {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

    return (
        <div>
            {chosenEmoji ? (
                <h4 style={{fontSize: '30px'}}>{chosenEmoji.emoji}</h4>
            ) : (
                <h4 style={{fontSize: '20px'}}>{"Choose an Emoji"}</h4>
            )}
            <Picker onEmojiClick={onEmojiClick}/>
        </div>
    );
};

export default ProfileCreator;
