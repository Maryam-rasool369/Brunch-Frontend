import { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoPersonOutline } from 'react-icons/io5';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger & close icons
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import NavBarRight from './NavBarRight';
import NavBarLeft from './NavBarLeft';
import styles from './Css/navBar.module.css';
import { UserContext } from '../../Context/UserContext';
import { toast } from 'react-toastify';

function NavBar() {
    const { userEmail, setUserEmail, isAdmin, setIsAdmin, setRedirect } = useContext(UserContext);
    const navigate = useNavigate();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
    const [showCuisinesDropdown, setShowCuisinesDropdown] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}profile`, {
                credentials: 'include',
            });
            if (response.ok) {
                const userInfo = await response.json();
                setUserEmail(userInfo.email);
                setIsAdmin(userInfo.isAdmin);
            }
        };
        fetchProfile();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900);
            if (window.innerWidth >= 900) setSidebarOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
        if (!isSidebarOpen) {
            setShowCuisinesDropdown(false);
            setShowProfileDropdown(false);
        }
    }
    const handleOptionClick = (option) => {
        if (option === 'logout') {
            fetch(`${import.meta.env.VITE_API_URL}/logout`, {
                credentials: 'include',
                method: 'POST',
            }).then((response) => {
                if (response.ok) {
                    setUserEmail(null);
                    navigate('/login');
                } else {
                    toast.error('Logout failed');
                }
            });
        }
        setSidebarOpen(false);
    };

    const handleOptionClickCuisine = (option) => {
        navigate(`/cuisines?type=${option}`);
        setSidebarOpen(false);
    };

    const navigation = () => {
        setRedirect(false)
        
        if(userEmail){
            navigate('/inspireOthers')
            
        }
        else{
            navigate('/login')
        }
        setSidebarOpen(false);

        };

    return (
        <>
            <div className={styles.navBar}>
                {isMobile ? (
                    <button className={styles.hamburger} onClick={toggleSidebar}>
                        {isSidebarOpen ? <FaTimes size={30} /> : <FaBars size={20} />}
                    </button>
                ) : (
                    <>
                        <NavBarLeft />
                        <NavBarRight />
                    </>
                )}
            </div>

            {/* Sidebar Menu for Mobile */}
            <div className={`${styles.sidebar} ${isSidebarOpen ? styles.showSidebar : ''}`}>
                {/* Close Button */}
                <button className={styles.closeBtn} onClick={() => {
                    setSidebarOpen(false);
                    setShowCuisinesDropdown(false);
                    setShowProfileDropdown(false)} }>
                    <FaTimes size={24} />
                </button>

                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <NavLink to="/" className={styles.navLink} onClick={() => setSidebarOpen(false)}>Home</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to="/blogs" className={styles.navLink} onClick={() => setSidebarOpen(false)}>Blogs</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <div className={styles.cuisineContainer}>
                            <NavLink to="/cuisines"  onClick={() => setSidebarOpen(false)} className={styles.navLink}>Cuisines</NavLink>
                            <MdOutlineKeyboardArrowDown className={styles.dropdownArrow}onClick={() => setShowCuisinesDropdown(!showCuisinesDropdown)}
                            />
                        </div>
                        {showCuisinesDropdown && (
                            <div className={styles.dropdown_menu}>
                                <ul className={styles.list}>
                                    {['Italian', 'Mexican', 'Japanese', 'French', 'Chinese', 'Pakistani', 'Middle Eastern', 'Thai', 'Korean'].map(cuisine => (
                                        <li key={cuisine} className={styles.dropdown_item} onClick={() => handleOptionClickCuisine(cuisine.toLowerCase())}>
                                            {cuisine}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to="/recipes" className={styles.navLink} onClick={() => setSidebarOpen(false)}>Recipes</NavLink>
                    </li>
                    {/* <li className={styles.navItem}>
                        <NavLink to="/about" className={styles.navLink} onClick={() => setSidebarOpen(false)}>About</NavLink>
                    </li> */}
                    <li className={styles.navItem}>
                        <p onClick={navigation} className={`${styles.navLink} ${styles.getCreativeButton}`}>Inspire Others</p>
                    </li>
                    {userEmail ? (
                        <>
                            {isAdmin && (
                                <li className={styles.navItem}>
                                    <NavLink to="/adminPanel" className={styles.navLink} onClick={() => setSidebarOpen(false)}>Admin Panel</NavLink>
                                </li>
                            )}
                            <li className={styles.navItem}>
                                <div className={`${styles.profileContainer} ${styles.navLink}`} onClick={() => setShowProfileDropdown(!showProfileDropdown)}>Profile
                                    <IoPersonOutline size={20} className={styles.profileIcon} />
                                    
                                </div>
                                {showProfileDropdown && (
                                    <div className={styles.dropdown_menu}>
                                        <ul className={styles.list}>
                                            <li className={styles.dropdown_item} onClick={() => handleOptionClick("editProfile")}>Edit Profile</li>
                                            <li className={styles.dropdown_item} onClick={() => handleOptionClick("logout")}>Logout</li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                        </>
                    ) : (
                        <>
                            <li className={styles.navItem}>
                                <NavLink to="/login" className={styles.link} onClick={() => setSidebarOpen(false)}>Login</NavLink>
                            </li>
                            <li className={styles.navItem}>
                                <NavLink to="/register" className={styles.link} onClick={() => setSidebarOpen(false)}>Register</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </>
    );
}

export default NavBar;
