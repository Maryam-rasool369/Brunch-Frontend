// import React from 'react'
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styles from '../css/cuisine.module.css'


function Cuisine() {
    const[hover,setHover] = useState(false)
    // const cuisineArray = []

    // Click dropdown link
    const handleOptionClick = (option)=>{

    }
    // Hover function
    const handleHover = () =>{
        setHover(!hover)
      }
  return (
    <>
        <NavLink onMouseEnter={handleHover}>Cusines <MdOutlineKeyboardArrowDown/></NavLink>
                <div className={styles.dropdown_menu}>
                    <ul>
                      <li className={styles.dropdown_item} onClick={() => handleOptionClick("Italian")}>Italian</li>
                      <li className={styles.dropdown_item} onClick={() => handleOptionClick("Mexican ")}>Mexican</li>
                      <li className={styles.dropdown_item} onClick={() => handleOptionClick("Japanese ")}>Japanese</li>
                      <li className={styles.dropdown_item} onClick={() => handleOptionClick("French ")}>French </li>
                      <li className={styles.dropdown_item} onClick={() => handleOptionClick("Chinese")}>Chinese</li>
                      <li className={styles.dropdown_item} onClick={() => handleOptionClick("Pakistani")}>Pakistani</li>
                      <li className={styles.dropdown_item} onClick={() => handleOptionClick("Middle Eastern")}>Middle Eastern</li>
                      <li className={styles.dropdown_item} onClick={() => handleOptionClick("Thai")}>Thai</li>
                      <li className={styles.dropdown_item} onClick={() => handleOptionClick("Korean")}>Korean</li>
                    </ul>
                </div>
    </>
  )
}

export default Cuisine