import React, { useContext } from 'react'
import styles from "./Header.module.css"
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import LowerHeader from './LowerHeader';
import { BiCart } from "react-icons/bi";
import { DataContext } from '../DataProvider/DataProvider';

const Header = () => {
  const[{basket},dispatch]=useContext(DataContext)
  // console.log(basket.length);
  return (
    <section className={styles.fixed}>
    <section>
      <div className={styles.header_container}>
        {/* logo Section*/}
        <div className={styles.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>

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
          <input type="text" placeholder='Search Amazon'/>
          <BsSearch size={25} />
        </div>

        <div className={styles.order_container}>
          <div>
            <Link to="" className={styles.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt="" />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
          </div>
          <Link to="/auth">
            <p>Hello, sign In</p>
            <span> Account & Lists</span>
          </Link>

          {/* orders */}
          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          {/* cart */}
          <Link to="/cart" className={styles.cart}>
            <BiCart size={35} />
            <span>{basket.length}</span>
          </Link>
        </div>
      </div>
    </section>
    <LowerHeader/>
    </section>
  );
}

export default Header