import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import styles from "./Signup.module.css";

function Signup() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const handleSubmission = () => {
    console.log(values);
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Please fill all fields");
      console.log("conditions chal rhi abi");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        console.log(res);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log("Error-", err);
        setErrorMsg(err.message);
        setSubmitButtonDisabled(false);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>

        <InputControl label="Name" placeholder="Enter your name" onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))} />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))}
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
