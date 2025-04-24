import styles from './Css/cuisine.module.css'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

function Cuisine() {
    const navigate = useNavigate();

    const handleOptionClick = (option)=>{
        navigate(`/cuisines?type=${option}`)
    }

  return (
    <>
    <div className={styles.cuisineWrapper}>
        <NavLink to='/cuisines' className={({isActive}) => isActive ? `${styles.cuisine} ${styles.active}` : styles.cuisine}>Cuisines<MdOutlineKeyboardArrowDown/></NavLink>
        {/* {isHover && */}
                <div className={`${styles.dropdown_menu} ${styles.onHover}`}>
                    <ul className={`${styles.list}`}>
                      <li className={styles.dropdown_item} onClick={() => handleOptionClick("italian")}>Italian</li>
                      <li className={styles.dropdown_item} onClick={() => handleOptionClick("mexican ")}>Mexican</li>
                      <li className={styles.dropdown_item} onClick={() => handleOptionClick("japanese ")}>Japanese</li>
                      <li className={styles.dropdown_item} onClick={() => handleOptionClick("french ")}>French </li>
                      <li className={styles.dropdown_item} onClick={() => handleOptionClick("chinese")}>Chinese</li>
                      <li className={styles.dropdown_item} onClick={() => handleOptionClick("pakistani")}>Pakistani</li>
                      <li className={styles.dropdown_item} onClick={() => handleOptionClick("middleEastern")}>Middle Eastern</li>
                      <li className={styles.dropdown_item} onClick={() => handleOptionClick("thai")}>Thai</li>
                      <li className={styles.dropdown_item} onClick={() => handleOptionClick("korean")}>Korean</li>
                    </ul>
                </div>
                </div>
            {/* } */}
    </>
  )
}

export default Cuisine