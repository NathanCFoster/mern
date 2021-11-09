import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import './style.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import io from 'socket.io-client';

export default () => {
    const [products, setProducts] = useState([]);
    const [socket] = useState(() => io(':8000'));
    const [trans, setTrans] = useState([]);
    const ref = useRef();

    useEffect(() => {
        // axios.get("http://localhost:8000/api/products")
        //     .then(e => setProducts(e.data))
        //     .catch(e => console.log(e))
        socket.emit("allProds");
        socket.on("prodsResp", e => setProducts(e));
        // return () => socket.disconnect(true);
    }, [])

    const handleDelete = async id => {
        await(axios.delete("http://localhost:8000/api/products/delete/" + id)
            .catch(e => console.log(e)));
        socket.emit("allProds");
    }

    return (
        <div className="col m-5">
            <p className="display-2">All Products</p>
                <TransitionGroup
                className="list-group list-group-flush">
                    {products.map(({ _id, title}, i) => 
                            <CSSTransition
                                classNames="product"
                                timeout={500}
                                key={_id}>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <a href={`/product/${_id}`} className="nav-link">{title}</a>
                                    <a href="#" onClick={() =>  handleDelete(_id)} className="text-decoration-none text-black">Delete</a>
                                </li>
                            </CSSTransition>
                    )}
            </TransitionGroup>

        </div>
    );
}
