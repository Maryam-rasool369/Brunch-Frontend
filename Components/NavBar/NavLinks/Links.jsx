// import React from 'react'
import { NavLink } from 'react-router-dom'
import Cuisine from './Cuisine'
import styles from '../css/links.module.css'


function Links() {
  return (
    
    <ul className={styles.navList}>
    <li className={styles.navItem}>
      <NavLink className={styles.navLink}>Home</NavLink>
    </li>
    <li className={styles.navItem}>
      <NavLink className={styles.navLink}>Blogs</NavLink>
    </li>
    <li className={styles.navItem}>
      <Cuisine className={styles.navLink}/>
    </li>
    <li className={styles.navItem}>
      <NavLink className={styles.navLink}>Recipes</NavLink>
    </li>
    <li className={styles.navItem}>
      <NavLink className={styles.navLink}>About</NavLink>
    </li>
  </ul>
  
  )
}

export default Links