import React, { useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

export default () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(1);
    const [description, setDesc] = useState("");
    const [socket] = useState(() => io(':8000')); 

    const submitHandle = async e => {
        e.preventDefault();
        await(axios.post('http://localhost:8000/api/products/create', {
            title,
            price,
            description
        }).then(e => console.log(e))
            .catch(e => console.log(e)));
        await(setTitle(""), setPrice(1), setDesc(""));
        socket.emit("allProds");
    }

    return(
        <form onSubmit={submitHandle} className="form m-5 col">
            <p className="display-2 mb-3">Create Product</p>
            <div className="form-floating mb-3">
                <input type="text" onChange={e => setTitle(e.target.value)} className="form-control" placeholder="john" value={title} />
                <label>Title</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" onChange={e => setPrice(e.target.value)} className="form-control" placeholder="1" value={price} />
                <label>Price (in USD)</label>
            </div>
            <div className="form-floating mb-3">
                <textarea style={{
                    height: 100
                }} placeholder="desc" 
                className="form-control"
                onChange={e => setDesc(e.target.value)}
                value={description} ></textarea>
                <label>Description</label>
            </div>
            <div className="d-grid mb-3">
                <input type="submit" value="Create" className="btn btn-outline-dark" />
            </div>
        </form>
    );
}