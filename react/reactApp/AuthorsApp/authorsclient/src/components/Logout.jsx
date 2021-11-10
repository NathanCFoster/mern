import { useNavigate } from "react-router";
import { useEffect } from "react"; 

export default () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("uid", "");
        navigate("/");
    }, [])
    return(
        <div>

        </div>
    );
}