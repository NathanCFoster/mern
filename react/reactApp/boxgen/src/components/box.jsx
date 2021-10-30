import React, { useState } from "react";

const AddBox = (props) => {
    const [newStr, setStr] = useState("");
    const [newHeight, setHeight] = useState("");

    const newBox = (e) => {
        e.preventDefault();
        props.submitColor(newStr, parseInt(newHeight));
        setStr("");
        setHeight("");
    }


    return (
        <div className="container">
            <form className="form" onSubmit={newBox}>
                <div className="d-flex flex-row mb-3 align-items-center justify-content-evenly">
                    <p className="display-5 d-inline">Color</p>
                    <div className="form-floating">
                        <input type="text" onChange={(e) => { setStr(e.target.value); console.log(e.target.value) }} className="form-control" value={newStr} placeholder="color" />
                        <label>Color</label>
                    </div>
                    <div className="form-floating">
                        <input type="number" onChange={(e) => setHeight(e.target.value)} value={newHeight} placeholder="hiegh" className="form-control" />
                        <label htmlFor="">Height</label>
                    </div>
                    <input type="submit" value="Add" className="btn btn-outline-dark" />
                </div>
            </form>
        </div>
    );
}

export default AddBox;