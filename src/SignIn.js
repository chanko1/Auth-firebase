import { auth } from "./firebase";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const SignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/Page");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const SignUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          toast.success("Cool you succeeded, you can now Sign in ");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
    document.getElementById("clearE").value = "";
    document.getElementById("clearP").value = "";
  };

  return (
    <div className="login">
      <ToastContainer />
      <div className="login__container">
        <h1>Sign In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            id="clearE"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            id="clearP"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={SignIn}
          >
            Sign In
          </button>
        </form>
        <p>
          If you don't have one you can create it, it's free don't worry Broo
          !!!!!
        </p>
        <button className="login__registerButton" onClick={SignUp}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default SignIn;
