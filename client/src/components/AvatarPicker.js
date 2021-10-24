import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

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

export default AvatarPicker;