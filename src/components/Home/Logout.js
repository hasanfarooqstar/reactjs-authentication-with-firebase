import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Logout() {
  const signOutt = () => {
    console.log("entered in Logout Funct");
    signOut(auth);
  };
  return (
    <>
      <button onClick={() => signOutt()}>Logout</button>
    </>
  );
}

export default Logout;
