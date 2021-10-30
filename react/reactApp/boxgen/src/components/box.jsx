import React, { useState } from "react";

const AddBox = (props) => {
    const [newStr, setStr] = useState("");

    const newBox = (e) => {
        e.preventDefault();
        props.submitColor(newStr);
        setStr("");
    }


    return(
        <div className="container">
            <form className="form" onSubmit={newBox}>
                <div className="d-flex flex-row mb-3 align-items-center justify-content-evenly">
                    <p className="display-5 d-inline">Color</p>
                    <input type="text" onChange={(e) => {setStr(e.target.value); console.log(e.target.value)}} className="d-inline" value={newStr} />
                    <input type="submit" value="Add" className="btn btn-outline-dark"/>
                </div>
            </form>
        </div>
    );
}

export default AddBox;