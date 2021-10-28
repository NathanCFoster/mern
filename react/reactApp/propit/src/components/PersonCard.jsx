import React, { Component } from "react";

const PersonCard = props => {
    // constructor = props => {
    //     // super(props);
    //     this.state = {
    //         age: this.props.person.age
    //     };
    // }
    // this.addAge = () => {
    //     var newAge = parseInt(this.state.age);
    //     this.setState({ age: newAge + 1});
    // }
    return(
        <div className="container">
            <p className="display-3">{props.person.firstName}, {props.person.lastName}</p>
            <p>Age: {props.person.age}</p>
            <p>Hair Color: {props.person.hairColor}</p>
            {/* <button onClick={ this.addAge } className="btn-outline-dark btn">It's your birthday</button> */}
        </div>
    );
}

export default PersonCard;