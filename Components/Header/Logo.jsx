import styles from './Css/logo.module.css'
import image from '../../Assets/Logo/logo-removebg-preview.png'
import { NavLink } from 'react-router-dom'


function Logo() {
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

export default Logo