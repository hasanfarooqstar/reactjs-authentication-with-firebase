import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import Logout from "./Logout";

function Home(props) {
  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>
      <Logout />
      <br />
      <br />
      <br />
      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
  );
}

export default Home;
