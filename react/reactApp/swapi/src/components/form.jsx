import React, { useState } from "react";
import { useNavigate } from "react-router";

const Form = props => {
    const [dropdown, setDropdown] = useState("people");
    const [id, setID] = useState(1);
    const [err, setErr] = useState(true);
    const navigate = useNavigate();
    const validateID = (e) => {
        if (e.target.value < 1) {
            setErr(true);
        } else {
            setErr(false);
            setID(e.target.value);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!err) {
            navigate('' + dropdown + '/' + id);
        }
        
    }
    return (
        <form onSubmit={handleSubmit} className="form m-5">
            <p className="text-danger text-center">{err == true ? "Id must be at least 1" : "" }</p>
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="dropdown" className="col-form-label">Search For: </label>
                </div>
                <div className="col-auto">
                    <select id="dropdown" className="form-select" onChange={(e) => setDropdown(e.target.value)}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
                <div className="col-auto">
                    <label htmlFor="id" className="col-form-label">ID: </label>
                </div>
                <div className="col-auto">
                    <input type="number" className="form-control" id="id" onChange={(e) => validateID(e)} />
                </div>
                <div className="col-auto">
                    <input type="submit" value="Find" className="btn btn-outline-primary" />
                </div>
            </div>
        </form>
    );
}

export default Form