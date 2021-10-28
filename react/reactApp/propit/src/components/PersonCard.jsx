import React, { Component } from "react";

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.person.age
        };
    }
    addAge = () => {
        var newAge = parseInt(this.state.age);
        this.setState({ age: newAge + 1});
    }
    render(){
        return(
            <div className="container">
                <p className="display-3">{this.props.person.firstName}, {this.props.person.lastName}</p>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.person.hairColor}</p>
                <button onClick={ this.addAge } className="btn-outline-dark btn">It's your birthday</button>
            </div>
        );
    }
}

export default PersonCard;