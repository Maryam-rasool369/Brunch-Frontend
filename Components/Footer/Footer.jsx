// import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <a href="/" className={styles.footerLogo}>
            <span>Brunch</span>
          </a>
          <p>
            Discover delicious recipes, cooking tips, and food stories to make
            your kitchen experience more exciting!
          </p>
          <div className={styles.socialIcons}>
            <a href="/" className={styles.socialIcon}><FaFacebookF /></a>
            <a href="/" className={styles.socialIcon}><FaTwitter /></a>
            <a href="/" className={styles.socialIcon}><FaInstagram /></a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>Explore</h3>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/recipes'}>Recipes</Link></li>
            <li><Link to={'/blogs'}>Blogs</Link></li>
            <li><Link to={'/cuisines'}>Cuisines</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Resources</h3>
          <ul>
            <li><a href="/">Cooking Tips</a></li>
            <li><a href="/">Ingredient Guide</a></li>
            <li><a href="/">Kitchen Essentials</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Contact</h3>
          <ul>
            <li><a href="/">Get in Touch</a></li>
            <li><a href="/">Collaborate</a></li>
            <li><a href="/">Advertise</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <small>&copy; 2025 Brunch. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
