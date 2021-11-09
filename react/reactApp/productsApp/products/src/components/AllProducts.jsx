import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import io from 'socket.io-client';

export default () => {
    const [products, setProducts] = useState([]);
    const [socket] = useState(() => io(':8000'));

    useEffect(() => {
        // axios.get("http://localhost:8000/api/products")
        //     .then(e => setProducts(e.data))
        //     .catch(e => console.log(e))
        socket.emit("allProds");
        socket.on("prodsResp", e => setProducts(e));
        // return () => socket.disconnect(true);
    }, [])
    
    return (
        <div className="col m-5">
            <p className="display-2">All Products</p>
            <TransitionGroup
                className="products">
                <ul className="list-group list-group-flush">
                    {products.map((item) =>
                        <CSSTransition
                            in={true}
                            timeout={500}
                            classNames="product"
                            key={item._id}>
                            <li key={item._id} className="list-group-item"><a href={`/product/${item._id}`} className="nav-link">{item.title}</a></li>
                        </CSSTransition>
                    )}
                </ul>
            </TransitionGroup>

        </div>
    );
}
