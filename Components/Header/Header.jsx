import styles from './Css/header.module.css'
import Logo from './Logo'
import { useEffect, useState } from 'react';
import NavBar from './NavBar';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
          <Logo></Logo>
          <div className={`${styles.navBar} ${scrolled ? styles.scrolled : ""}`}>
            <NavBar></NavBar>
          </div>
        </header>
        
        </>
        )
}

export default Header