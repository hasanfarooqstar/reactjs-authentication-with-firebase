import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const handleSubmission = () => {
    console.log(values);
    if (!values.email || !values.pass) {
      setErrorMsg("Please fill all fields");
      console.log("conditions chal rhi abi");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        console.log(res);

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
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))}
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
