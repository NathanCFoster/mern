import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Display = props => {
    const { thename, id } = useParams();
    const [thing, setThing] = useState({});
    useEffect(() => {
        axios.get("https://swapi.dev/api/" + thename + "/" + id + "/").then(e => setThing(e.data)).catch(e => console.log(e))
    }, [])
    if (thing && thename == "people") {
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
                </div>

            </div>
        );
    } else if (thing) {
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
    }
}

export default Display;