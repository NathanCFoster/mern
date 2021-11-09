import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

export default () => {
    const navigate = useNavigate();
    const { id } = useParams()
    useEffect(() => {
        axios.delete("http://localhost:8000/api/products/delete/" + id)
            .then(navigate("/"))
            .catch(e => console.log(e));
    }, [])
    return(
        <a href="/" className="display-2 nav-link">Home</a>
    );
}