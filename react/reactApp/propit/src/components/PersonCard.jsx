import React, { Component } from "react";

class PersonCard extends Component{
    render(){
        return(
            <div className="container">
                <p className="display-3">{this.props.person.firstName}, {this.props.person.lastName}</p>
                <p>Age: {this.props.person.age}</p>
                <p>Hair Color: {this.props.person.hairColor}</p>
            </div>
        );
    }
}

export default PersonCard;