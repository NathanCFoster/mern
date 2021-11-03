import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import obi from './download.jpeg'

const Display = props => {
    const { thename, id } = useParams();
    const [thing, setThing] = useState({});
    const [world, setWorld] = useState({});
    const [starships, setStarships] = useState([])

    useEffect(() => {
        var req = axios.get("https://swapi.dev/api/" + thename + "/" + id + "/").then(e => {
            setThing(e.data)
            if (thing) {
                getPeople(e.data);
            }}).catch(e => console.log(e));
    }, [])
    const getPeople = (data) => {
        axios.get(data.homeworld).then(e => setWorld(e.data)).catch(e => console.log(e));
        for (let index = 0; index < data.starships.length; index++) {
            axios.get(data.starships[index]).then(e => {
                let allStars = [...starships];
                allStars.push(e.data);
                setStarships(allStars);
            }).catch(e => console.log(e))
        }
        
    }

    if (thing.name && thename == "people") {
        world.id = thing.homeworld.slice(22);
        return (
            <div className="container">
                <p className="display-2">{thing.name}</p>
                <div className="row">
                    <dt className="col-sm-3">Height: </dt>
                    <dd className="col-sm-9">{thing.height} cm</dd>
                    <dt className="col-sm-3">Mass: </dt>
                    <dd className="col-sm-9">{thing.mass} kg</dd>
                    <dt className="col-sm-3">Hair Color: </dt>
                    <dd className="col-sm-9">{thing.hair_color}</dd>
                    <dt className="col-sm-3">Gender</dt>
                    <dd className="col-sm-9">{thing.gender}</dd>
                    <dt className="col-sm-3">Homeworld: </dt>
                    <dd className="col-sm-9"><a href={"/" + world.id} className="nav-link">{world.name}</a></dd>
                    <dt className="col-sm-3">Random Starship: </dt>
                    {starships.map((item, i) => 
                        <dd className="col-sm-9" key={i}>{item.name}</dd>
                    )}
                </div>
            </div>
        );
    } else if (thing.name && thename == "planets") {
        return (
            <div className="container">
                <p className="display-2">{thing.name}</p>
                <div className="row">
                    <dt className="col-sm-3">Rotation Period: </dt>
                    <dd className="col-sm-9">{thing.rotation_period}</dd>
                    <dt className="col-sm-3">Climate: </dt>
                    <dd className="col-sm-9">{thing.climate}</dd>
                    <dt className="col-sm-3">Gravity: </dt>
                    <dd className="col-sm-9">{thing.gravity}</dd>
                    <dt className="col-sm-3">Population</dt>
                    <dd className="col-sm-9">{thing.population}</dd>
                </div>

            </div>
        );
    } else if (thing.name && thename == "starships") {
        return (
            <div className="container">
                <p className="display-2">{thing.name}</p>
                <div className="row">
                    <dt className="col-sm-3">Model: </dt>
                    <dd className="col-sm-9">{thing.model}</dd>
                    <dt className="col-sm-3">Cost: </dt>
                    <dd className="col-sm-9">{thing.cost_in_credits} in credits</dd>
                    <dt className="col-sm-3">Crew: </dt>
                    <dd className="col-sm-9">{thing.crew}</dd>
                    <dt className="col-sm-3">Pasengers</dt>
                    <dd className="col-sm-9">{thing.passengers}</dd>
                </div>
            </div>
        );

    } else {
        return (
            <div className="m-5">
                <p className="display-3 mb-3">These aren't the droids you're looking for...</p>
                <img src={obi} alt="no droids pt.2" />
            </div>
        );
    }
}

export default Display;