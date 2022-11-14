import React, { useState } from 'react';

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('invalid input');
        }
    };

    return ( //when the text in this input changes we are going to call the setname method and we are going to set it to the target value so every time the text changes, this name value in our state is being updated with it so the state and the actual user interface input are tied together the value in it is equal to both. 
        <div>
            <h4>Add a new room</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)} //the onchange always updates the state value, and the state value updates the value in this input so they stayed tied together both ways
                    value={name}
                />
                <input
                    type='text'
                    placeholder='area'
                    onChange={handleAreaInput}
                    value={area}
                />
                <button type='submit'>Add Room</button>
            </form>
        </div>
    )
}