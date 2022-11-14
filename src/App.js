import React, { Component } from "react";
import { HousesList } from './Components/HousesList';

class App extends Component {
    render() {
        return ( // we have to create houseslist
            <div>
                <HousesList /> 
            </div>
        )
    }
}

export default App;