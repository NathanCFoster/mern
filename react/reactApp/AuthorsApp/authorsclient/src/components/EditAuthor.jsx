import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default (props) => {
    const [name, setName] = useState("");
    const { _id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + _id + "/").then(e => setName(e.data.name));
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/authors/update/" + _id + "/", {name}).then(() => navigate("/author/" + _id)).catch(e => console.log(e));
    }

    return(
        <div className="m-3 row">
            <div className="nav m-3">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to={"/author/" + _id}>Back</Link>
            </div>
            <form onSubmit={handleSubmit} className="col m-5">
                <p className="display-2">Update {name}</p>
                <div className="form-floating mb-3">
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e" className="form-control" />
                    <label className="text-black">Name of author</label>
                </div>
                <div className="d-grid">
                    <input type="submit" value="Change Name" className="btn btn-outline-dark" />
                </div>
            </form>
        </div>
    );
}