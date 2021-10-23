import React, { useState } from 'react';
import NavBar from './NavBar';

import Picker from 'emoji-picker-react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AvatarPicker = () => {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

    return (
        <div>
            {chosenEmoji ? (
                <span>You chose: {chosenEmoji.emoji}</span>
            ) : (
                <span>No emoji Chosen</span>
            )}
            <Picker onEmojiClick={onEmojiClick} />
        </div>
    );
};

class ProfileCreator extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div class="profile-info">
                    <AvatarPicker/>
                    <div class="input-group first-name">
                        <input type="text" class="form-control" placeholder="First Name" aria-label="First Name"/>
                    </div>
                    <div class="input-group last-name">
                        <input type="text" class="form-control" placeholder="Last Name" aria-label="Last Name" />
                    </div>
                    <div class="input-group major">
                        <input type="text" class="form-control" placeholder="Major" aria-label="Major" />
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Year
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Freshman</a></li>
                            <li><a class="dropdown-item" href="#">Sophomore</a></li>
                            <li><a class="dropdown-item" href="#">Junior</a></li>
                            <li><a class="dropdown-item" href="#">Senior</a></li>
                            <li><a class="dropdown-item" href="#">Graduate</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileCreator;
