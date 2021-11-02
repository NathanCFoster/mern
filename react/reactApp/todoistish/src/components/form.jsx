import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './style.css';
import { v4 as uid } from 'uuid';

const Form = props => {
    const results = JSON.parse(localStorage.getItem("todos"));
    const [todos, allTD] = useState(
        Array.isArray(results) ? results : [{id: uid(), content: "this"}]
    );
    const [td, setTD] = useState("");
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    })
    return (
        <div className="row m-5">
            <form className="form col" onSubmit={(e) => {
                e.preventDefault();
                allTD([...todos, { id: uid(), content: td }]);
                setTD("");
            }}>
                <div className="form-floating mb-3">
                    <input type="text" placeholder="mern" onChange={(e) => setTD(e.target.value)} className="form-control" value={td} />
                    <label>Add a To Do</label>
                </div>
                <div className="d-grid">
                    <input type="submit" value="Add" className="btn btn-outline-dark" />
                </div>
            </form>
            <ul className="list-group-flush col">
                <TransitionGroup>
                    {todos.map(({ id, content }) => (
                        <CSSTransition
                            key={id}
                            classNames="items"
                            timeout={500}
                            >
                            <li className="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
                                {content}
                                <input type="button" value="x" className="btn btn-outline-dark" onClick={() =>
                                    allTD(items =>
                                        items.filter(item => item.id !== id)
                                    )
                                } />
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ul>
        </div>
    );
}

export default Form;