// import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { toast } from "react-toastify";
import Links from './NavLinks/Links'

import styles from './css/navBarBottom.module.css'

function NavBarBottom() {
  const{userEmail,setUserEmail,isAdmin,setIsAdmin} = useContext(UserContext)
    const [isMenuOpen,setMenuOpen] = useState(false)
    const navigate = useNavigate()

    const toggleMenu = ()=>{
        setMenuOpen(!isMenuOpen)
    }

    const handleOptionClick = (option)=>{
        console.log(option)
        setMenuOpen(false)
        if(option === 'logout'){
            fetch(`${import.meta.env.VITE_API_URL}logout`,{
                credentials: 'include',
                method: 'POST'
            }).then(response =>{
                if(response.ok){
                    setUserEmail(null);
                    navigate('/login');
                }
                else{
                    toast.error('Logout failed')
                }
            })
        }
    }

    useEffect(() => {
            // Check if user is logged in by checking email or a token
            const fetchProfile = async () => {
            //   const response = await fetch(`${import.meta.env.VITE_API_URL}profile`, {
              const response = await fetch('https://brunch-backend.vercel.app/profile', {
                    credentials: 'include',
                    method: "GET",
              });
              if (response.ok) {
                const userInfo = await response.json();
                setUserEmail(userInfo.email); // Set user info in context
                setIsAdmin(userInfo.isAdmin)
              }
            };
          
            fetchProfile();
          });

          
          const navigation = () => {
            if(userEmail){
                navigate('/getcreative')
            }
            else{
                navigate('/login')
            }
            
        }

  return (
    
      <div className={styles.navbar}>
        
        {/* Left Side - Links */}
        <div className={styles.navbarLeft}>
            <Links/>
        </div>
        {/* <div className={styles.navLogo}>
            <NavLink to={'/'} className={styles.logoLink}>
                <img
                    src={image}
                    width="30"
                    height="30"
                    className={styles.logo}
                    alt="Brunch logo"
                    />
            </NavLink> */}
        {/* </div> */}
        <div className={styles.navbarRight}>
                    
                    <button onClick={navigation} className={styles.getCreativeButton}>getCreative</button>
                    {userEmail ?
                    <>
                        {/* Only Admin can see */}
                        {isAdmin && (
                            <NavLink to={'/adminPanel'} className={styles.adminPanelLink}>AdminPanel</NavLink>
                        )}
                        <div className={styles.profile_menu_container}>
                            <button onClick={toggleMenu} className={styles.profile_icon_button}>
                                <FaUserCircle size={50} className={styles.profile_icon} />
                            </button>
                            {isMenuOpen && (
                                <div className={styles.dropdown_menu}>
                                    <ul>
                                        <li className={styles.dropdown_item} onClick={() => handleOptionClick("editProfile")}>Edit Profile</li>
                                        <li className={styles.dropdown_item} onClick={() => handleOptionClick("logout")}>Logout</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        
                        </>
                    :
                    <>
                        <NavLink to="/login" className={styles.link}>Login</NavLink>
                        <NavLink to="/register" className={styles.link}>Register</NavLink>
                    </>
                    }
        </div>
        </div>
  )
}

export default NavBarBottom