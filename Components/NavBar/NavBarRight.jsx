// import React from 'react'
import {} from 'react'
import styles from './css/navBarTop.module.css'
import image from '../../Assets/Logo/Borcelle_Kitchen-removebg-preview.png'
import { NavLink } from 'react-router-dom'

function NavBarTop() {
    


  return (

    <div className={styles.navLogo}>
    <NavLink to={'/'} className={styles.logoLink}>
        <img
              src={image}
              width="30"
              height="30"
              className={styles.logo}
              alt="Brunch logo"
            />
    </NavLink>
    </div>

  )
}

export default NavBarTop