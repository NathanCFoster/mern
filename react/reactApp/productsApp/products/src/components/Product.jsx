import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default () => {
    const { id } = useParams();
    const [product, setProd] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id).then(e => setProd(e.data.product)).catch(e => console.log(e));
    }, [])

    return (
        <div className="m-5">
        <a href="/" className="nav-link text-start">Home</a>
            <p className="display-2 mb-3 text-start">{product.title}</p>
            <div className="row m-5 container">
                <dt className="col-sm-3">Price:</dt>
                <dd className="col-sm-9">${product.price}</dd>
                <dt className="col-sm-3">Description:</dt>
                <dd className="col-sm-9">{product.description}</dd>
            </div>
        </div>
    );
}