import React from "react";
import { House } from './House';
import { housesApi } from "../rest/HousesApi.js";

export class HousesList extends React.Component { //state is no longer inthe contructor, we are going to create it as an object
    state = {
        houses: []
    };

    componentDidMount() {
        this.fetchHouses();
    }

    fetchHouses = async () => {
        const houses = await housesApi.get(); //we import houses API to use our get method
        this.setState({ houses });
    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses(); //is going to call fetchhouses method again which is going to update our state with  the new houses after the current house been updated, so make the update and then get all the new data update it on our whats going to be rendered to the screen 
    };

    render() {
        return (
            <div className="house-list">
                {this.state.houses.map((house) => (
                    <House
                        house={house}
                        key={house._id}
                        updateHouse={this.updateHouse}  
                    />
                ))}
            </div>
        )
    }
}