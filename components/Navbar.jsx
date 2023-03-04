import Image from "next/image";
import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <section className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callBtn}>
          <Image src="/images/telephone.png" alt="telephone" width="32" height="32"/>
        </div>
        <div className={styles.texts}>
          <h4 className={styles.text}>ORDER NOW!</h4>
          <h4 className={styles.text}>013020-50 981</h4>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
            <li className={styles.listItem}>Home</li>
            <li className={styles.listItem}>Products</li>
            <li className={styles.listItem}>Menu</li>
            <Image src="/images/logo.png" alt="logo" width="160" height="69"/>
            <li className={styles.listItem}>Events</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
        <Image src="/images/cart.png" alt="cart" width="30" height="30"/>
        <div className={styles.counter}>
            <span>2</span>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
