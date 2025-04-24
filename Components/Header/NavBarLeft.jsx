import styles from './Css/navBarLeft.module.css'
import { NavLink } from 'react-router-dom'
import Cuisine from './Cuisine'

function NavBarLeft() {
  return (
        <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <NavLink to='/' className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Home</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to='/blogs' className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Blogs</NavLink>
                </li>
                <li className={styles.navItem}>
                    <Cuisine className={styles.navLink} />
                </li>
                <li className={styles.navItem}>
                    <NavLink to={'/recipes'} className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Recipes</NavLink>
                </li>
                {/* <li className={styles.navItem}>
                    <NavLink to='/about' className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>About</NavLink>
                </li> */}
            </ul>
    )
}

export default NavBarLeft
