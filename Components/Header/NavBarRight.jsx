import { useContext, useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
// import { FaUserCircle } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";

import { UserContext } from '../../Context/UserContext'
import { toast } from "react-toastify";
import styles from './Css/navBarRight.module.css'

function NavBarRight() {
    
    const{userEmail,setUserEmail,isAdmin,setIsAdmin,setRedirect} = useContext(UserContext)
    // const [isMenuOpen,setMenuOpen] = useState(false)
    const navigate = useNavigate()

    // const toggleMenu = ()=>{
    //     setMenuOpen(!isMenuOpen)
    // }

    const handleOptionClick = (option)=>{
        console.log(option)
        // setMenuOpen(false)
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
              const response = await fetch(`${import.meta.env.VITE_API_URL}profile`, {
                    credentials: 'include',
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
            setRedirect(false)
            
            if(userEmail){
                navigate('/inspireOthers')
                
            }
            else{
                navigate('/login')
            }
            
        }

  return (
    <div className={styles.navbarRight}>
                    
                    <button onClick={navigation} className={styles.getCreativeButton}>Inspire Others</button>
                    {userEmail ?
                    <>
                        {/* Only Admin can see */}
                        {isAdmin && (
                            <NavLink to={'/adminPanel'} className={styles.adminPanelLink}>AdminPanel</NavLink>
                        )}
                        <div className={styles.profile_menu_container}>
                            <button className={styles.profile_icon_button}>
                                <IoPersonOutline size={50} className={styles.profile_icon} />
                            </button>
                            {/* {isMenuOpen && ( */}
                                <div className={styles.dropdown_menu}>
                                    <ul className={styles.dropdown_menu_list}>
                                        <li className={styles.dropdown_item} onClick={() => handleOptionClick("editProfile")}>Edit Profile</li>
                                        <li className={styles.dropdown_item} onClick={() => handleOptionClick("logout")}>Logout</li>
                                    </ul>
                                </div>
                            {/* )} */}
                        </div>
                        
                        </>
                    :
                    <>
                        <NavLink to="/login" className={styles.link}>Login</NavLink>
                        <NavLink to="/register" className={styles.link}>Register</NavLink>
                    </>
                    }
        </div>
  )
}

export default NavBarRight