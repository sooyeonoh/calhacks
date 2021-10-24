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
                <span>{chosenEmoji.emoji}</span>
            ) : (
                <span>No emoji Chosen</span>
            )}
            <Picker onEmojiClick={onEmojiClick} />
        </div>
    );
};

export default AvatarPicker;