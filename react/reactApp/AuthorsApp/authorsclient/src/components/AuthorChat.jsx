import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link, useParams } from "react-router-dom";
import { io } from "socket.io-client";
import axios from "axios";

export default props => {
    const { _id } = useParams();
    const [user, setUser] = useState({});
    const [messages, setMsgs] = useState([]);
    const [author, setAuthor] = useState({});
    const [msg, sendMsg] = useState("");
    const [socket] = useState(() => io(':8000'));

    useEffect(async () => {
        await (axios.get("http://localhost:8000/api/authors/" + _id + "/").then(e => setAuthor(e.data)));
        socket.emit("updateUser", props.uid);
        socket.on("user", e => setUser(e));
        socket.emit("joinChat", _id);
        socket.emit("chat", _id);
        socket.on("messages", async e => {
            let updatedMessages = [...e];
            for (let index = 0; index < e.length; index++) {
                let temp = await(await(axios.get("http://localhost:8000/api/users/" + e[index].sentby + "/"))).data
                updatedMessages[index].sentby = temp.username;
            }
            setMsgs(updatedMessages);
        });
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        await (axios.post("http://localhost:8000/api/messages/new", {
            sentby: user._id,
            message: msg,
            room: _id
        }).catch(e => console.log(e)));
        sendMsg("");
        socket.emit("chat", _id);
    }

    return (
        <div className="row m-3">
            <div className="nav m-3">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to={"/edit/" + author._id}>edit</Link>
            </div>
            <div className="col display-3">
                Talk to other people that like {author.name}!
            </div>
            <div className="col border border-dark border-3 rounded chat d-flex flex-column justify-content-end overflow-auto">
                <TransitionGroup>
                    {messages && messages.map((item) =>
                        <CSSTransition
                            timeout={300}
                            classNames="chat-msg"
                            key={item._id}>
                            <div className="border border-dark rounded-pill message d-flex flex-column m-3 text-start">
                                <p className="fw-light ms-5">{item.sentby}</p>
                                <p className="fs-3 ms-3">{item.message}</p>
                            </div>
                        </CSSTransition>
                    )}
                </TransitionGroup>
                <form onSubmit={handleSubmit}>
                    <div className="form-floating d-flex">
                        <input type="text" placeholder="e" value={msg} onChange={e => sendMsg(e.target.value)} className="form-control d-grid mb-2" />
                        <label className="text-black">Send Message</label>
                        <input type="submit" value="Send!" className="btn btn-outline-dark mb-2" />
                    </div>
                </form>
            </div>
        </div>
    );
}