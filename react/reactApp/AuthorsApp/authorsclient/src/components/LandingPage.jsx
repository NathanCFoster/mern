import { useEffect, useState } from "react";
import axios from "axios";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';
import { Link } from "react-router-dom";
import io from 'socket.io-client';

export default (props) => {
    const [user, setUser] = useState({});
    const [favs, setFavs] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [socket] = useState(() => io(':8000'));

    useEffect(() => {
        socket.emit("updateUser", props.uid);
        socket.on("user", e => setUser(e));
        socket.emit("updateAllAuthors");
        socket.on("authors", e => setAuthors(e));
        console.log(props.uid)
    }, [])

    // useEffect(() => {
    //     let updatedAuthors = [];
    //     for (let index = 0; index < favs.length; index++) {
    //         updatedAuthors = (authors.filter(e => e._id != favs[index]));
    //     }
    //     setAuthors(updatedAuthors);
    // }, [authors])

    useEffect(async () => {
        if (user.favorites) {
            let results = [];
            for (let index = 0; index < user.favorites.length; index++) {
                let temp = await (axios.get("http://localhost:8000/api/authors/" + user.favorites[index] + "/"));
                results.push(temp.data);
            }
            setFavs(results);
        }
    }, [user])

    const newFav = id => {
        axios.put("http://localhost:8000/api/users/update/" + user._id + "/", {
            "favorites": [...favs, id]
        }).then(() => {
            socket.emit("updateUser", props.uid)
        })
            .catch(e => console.log(e));
    }

    const unFav = id => {
        let res = [];
        for (let index = 0; index < favs.length; index++) {
            if (favs[index]._id != id) {
                res.push(favs[index]._id);
            }
        }

        axios.put("http://localhost:8000/api/users/update/" + user._id + "/", {
            "favorites": res
        }).then(() => socket.emit("updateUser", props.uid))
            .catch(e => console.log(e));
    }

    return (
        <div className="row">
            <div className="nav">
                <Link to="/create" className="nav-link text-start ms-3 mt-3">Create new author</Link>
                <Link to="/logout" className="nav-link text-start ms-3 mt-3">Logout</Link>
            </div>
            <div className="col m-5">
                <p className="display-3">{user.username}'s favorite authors!</p>
                <TransitionGroup
                    className="list-group list-group-flush">
                    {favs.map(({ _id, name }) =>
                        <CSSTransition
                            classNames="favorites"
                            timeout={{ enter: 500, exit: 500 }}
                            key={_id}>
                            <li className="list-group-item d-flex justify-content-between">
                                <Link to={"/author/" + _id + "/"} className="nav-link">{name}</Link>
                                <Link to="" onClick={() => unFav(_id)} className="text-dark nav-link">Unfavorite</Link>
                            </li>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
            <div className="col m-5">
                <p className="display-3">All Authors</p>
                <TransitionGroup className="list-group list-group-flush">
                    {authors.map(({ _id, name }) =>
                        <CSSTransition
                            classNames="author"
                            timeout={500}
                            key={_id}>
                            <li className="list-group-item d-flex justify-content-between">
                                <Link to={"/author/" + _id + "/"} className="nav-link">{name}</Link>

                                {user.favorites && !user.favorites.includes(_id) && <a href="#" onClick={() => newFav(_id)} className="nav-link text-dark">Favorite</a>}
                            </li>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    );
}