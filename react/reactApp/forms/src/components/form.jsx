import React, { useState } from "react";
import { validEmail, validPW } from "./regex";

const LeForm = props => {
    const [firstName, setFName] = useState("");
    const [lastName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPW, setConfirm] = useState("");
    const [password, setPW] = useState("");

    const createForm = (e) => {
        e.preventDefault();
        const newForm = { firstName, lastName, email, confirmPW, password };
        console.log("Welcome", newForm);
    }

    const validateFName = () => {
        if (firstName.length <= 2 && firstName.length != 0) {
            return "Must be at least 2 characters";
        }
    }

    const validateLName = () => {
        if (lastName.length <= 2 && lastName.length != 0) {
            return "Must be at least 2 characters";
        }
    }

    const validateEmail = () => {
        if (!(validEmail.test(email)) && email.length != 0) {
            return "Must be a valid email";
        }
    }

    const validatePW = () => {
        if (!(validPW.test(password)) && password.length != 0) {
            return "Must be at least 8 characters and have a number";
        }
    }

    const checkPW = () => {
        if (password != confirmPW && confirmPW.length > 0) {
            return "Passwords must match!";
        }
    }

    return (
        <>
            <div className="conatiner m-4">
                <form onSubmit={createForm}>

                    <div className="form-floating mb-3">
                        <input type="text" onChange={(e) => setFName(e.target.value)} className="form-control" placeholder="this" />
                        <label>First Name</label>
                        <p className="text-danger text-center d-grid">{validateFName()}</p>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" onChange={(e) => setLName(e.target.value)} className="form-control" placeholder="this" />
                        <label>Last Name</label>
                        <p className="text-danger text-center d-grid">{validateLName()}</p>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="this" />
                        <label>Email</label>
                        <p className="text-danger text-center d-grid">{validateEmail()}</p>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" onChange={(e) => setPW(e.target.value)} className="form-control" placeholder="this" />
                        <label>Password</label>
                        <p className="text-danger text-center d-grid">{validatePW()}</p>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" onChange={(e) => setConfirm(e.target.value)} className="form-control" placeholder="this" />
                        <label>Confirm Password</label>
                        <p className="text-danger text-center d-grid">{checkPW()}</p>
                    </div>
                </form>
                <div className="container">
                    <p className="display-2">
                        Form Data
                    </p>
                    <dl className="row">
                        <dt className="col-sm-3">First Name</dt>
                        <dd className="col-sm-9">{firstName}</dd>
                        <dt className="col-sm-3">Last Name</dt>
                        <dd className="col-sm-9">{lastName}</dd>
                        <dt className="col-sm-3">Email</dt>
                        <dd className="col-sm-9">{email}</dd>
                        <dt className="col-sm-3">Password</dt>
                        <dd className="col-sm-9">{password}</dd>
                        <dt className="col-sm-3">Confirm PW</dt>
                        <dd className="col-sm-9">{confirmPW}</dd>
                    </dl>

                </div>

            </div>

        </>
    );
}

export default LeForm;