import React from "react";
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
    const { house, updateHouse } = props;
    
    const deleteRoom = (roomId) => {
        const updatedHouse = { //everytime we are deleting a room , we are updating an house so we are going to set the updated house to the results that come back when we filter out the room that has the matching ID. So if we are deleting a room. we want to remove that room from the array, so we have to go ahead and that room and assign it to updated house
            ...house, 
            rooms: house.rooms.filter((x) => x._id !== roomId) // it is going to be the same value, the same array, minus we are going to filter out the room that has the id of the room we are deleting, we are basically keeping all the values from the house that were in,  for this component and then we are updating the rooms array to be the same array it was befor, well it is a new array, all the same values minus the room with the id we are trying to delete and then we are going to take that house and send it to update house method and send the http request sent it to the API, update the database
        };
        updateHouse(updatedHouse); // we are assigning a new variable to the value of a new object, we are going to spread the house that represents the house component, this means that we are going to take all the values from it except any that we explicity declare afterawards 
    }

    const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room]});  //anytime we update props or state we always want to give a new object or array or value for it , never want to modify the existing one
    
    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label> {`${room.name} Area: ${room.area}`}</label>
                    <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    return ( //the result is going to be the house with the rooms in the house
        <div>
            <h1>{house.name}</h1>
            {
                rooms({ rooms, houseId: house._id, deleteRoom})
            }
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    )
};