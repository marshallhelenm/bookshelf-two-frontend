import React, { Component } from "react";

class Shelf extends Component {
    constructor () {
        super();
        this.state = {
            books: []
        }
    }

    render(){
        return <div>
            <h1>Your Shelves:</h1>
        </div>
    }
}


export default Shelf
