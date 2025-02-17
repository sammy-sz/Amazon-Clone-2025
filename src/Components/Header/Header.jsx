import React from 'react'
import styles from "./Header.module.css"
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import LowerHeader from './LowerHeader';
import { BiCart } from "react-icons/bi";

const Header = () => {
  return (
    <>
    <section>
      <div className={styles.header_container}>
        {/* logo Section*/}
        <div className={styles.logo_container}>
          <a href="#">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>

          {/* delivery */}
          <div className={styles.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivering to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Search section */}
        <div className={styles.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" />
          <BsSearch size={25} />
        </div>

        <div className={styles.order_container}>
          <div>
            <a href="" className={styles.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt="" />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
          </div>
          <a href="">
            <p>Hello, sign In</p>
            <span> Account & Lists</span>
          </a>

          {/* orders */}
          <a href="">
            <p>Returns</p>
            <span>& Orders</span>
          </a>

          {/* cart */}
          <a href="" className={styles.cart}>
            <BiCart size={35} />
            <span>0</span>
          </a>
        </div>
      </div>
    </section>
    <LowerHeader/>
    </>
  );
}

export default Header