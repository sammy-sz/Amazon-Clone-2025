import React, { useState } from "react";
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import{DataContext} from "../../Components/DataProvider/DataProvider"
import { useContext } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const[{user},dispatch]= useContext(DataContext)
  // console.log(user);

  const authHandler = async (e) => {
    e.preventDefault();
    if (e.target.name == "signin") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch ({
            type: Type.SET_USER,
            user: userInfo.user
          })
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section className={styles.login}>
      <Link>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG8.png"
          alt="amazon logo"
        />
      </Link>
      <div className={styles.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name=""
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name=""
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signin"
            onClick={authHandler}
            className={styles.login_signInButton}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={styles.login_registerbutton}
        >
          Create Your Amazon Account
        </button>
      </div>
    </section>
  );
};

export default Auth;
