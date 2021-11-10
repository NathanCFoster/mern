import React, { useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { Link } from "react-router-dom";

export default (props) => {
    const [socket] = useState(() => io(':8000'));
    const [name, setName] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/new", {
            name
        }).then(() => {
            setName("");
            socket.emit("updateAllAuthors")
        })
        .catch(e => console.log(e));
    }

    return(
        <form onSubmit={submitHandler} className="form m-5">
            <Link to="/" className="nav-link text-start mb-3">Home</Link>
            <p className="display-2 mb-3">
                Create Author
            </p>
            <div className="form-floating mb-3">
                <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="e" />
                <label className="text-dark">Name of Author</label>
            </div>
            <div className="d-grid">
                <input type="submit" value="Create" className="btn btn-outline-dark" />
            </div>
        </form>
    );
}