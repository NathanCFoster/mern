import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default () => {
    const { id } = useParams();
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(1);
    const [description, setDesc] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id).then(e => {
            console.log(e.data.product);
            setTitle(e.data.product.title);
            setPrice(e.data.product.price);
            setDesc(e.data.product.description);
        }).catch(e => console.log(e));
    }, [])

    const handleUpdate = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/update/" + id, {
            title,
            price,
            description
        }).then(alert("Successfully updated!")).catch(e => console.log(e));
    }

    return (
        <div className="container">
            <div className="nav m-3">
                <a href="/" className="nav-link">Home</a>
            </div>
            <form onSubmit={handleUpdate} className="form m-5">
                <p className="display-2 mb-3">Update <a href={"/product/" + id} className="text-decoration-none text-dark">{title}</a></p>
                <div className="form-floating mb-3">
                    <input type="text" value={title} placeholder="h" className="form-control" onChange={e => setTitle(e.target.value)} />
                    <label>Title</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" value={price} placeholder="1" className="form-control" onChange={e => setPrice(e.target.value)} />
                    <label>Price (in USD)</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea style={{ height: 100 }} value={description} onChange={e => setDesc(e.target.value)} className="form-control" placeholder="h"></textarea>
                    <label>Description</label>
                </div>
                <div className="d-grid">
                    <input type="submit" value="Update" className="btn btn-outline-dark" />
                </div>
            </form>
        </div>

    );
}