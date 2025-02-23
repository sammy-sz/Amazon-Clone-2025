import React from "react";
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";

const Auth = () => {
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
            <input type="email" name="" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="password" />
          </div>
          <button className={styles.login_signInButton}>Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className={styles.login_registerbutton}>
          Create Your Amazon Account
        </button>
      </div>
    </section>
  );
};

export default Auth;
