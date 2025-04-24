import styles from './Css/cuisines.module.css'

import image from '../../Assets/Cuisines/top-view-dishes-with-pasta-risotto.jpg'
import {para} from "../../Data/Cuisines"
import {cuisinesDesc} from '../../Data/Cuisines'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

function Cuisines() {
    const location = useLocation()
    const [params] = useSearchParams(location.search)
    const type = params.get('type')
    useEffect(()=>{

        if (type) {
            const element = document.getElementById(type)

            if (element) {
                element.scrollIntoView({behavior:'smooth'});
            }
        }
    },[type])
    
  return (
    <>
        {/* <div className={styles.container}> */}
        <div className={styles.main}>
            <div className={styles.heading}>A Culinary World Tour: Exploring Different Types of Cuisines</div>
            <img className={styles.mainImage} src={image} alt="cuisines" />
            <p className={styles.para}>{para.text}</p>
        </div>

        {cuisinesDesc.map(cuisine => (
        <div key={cuisine.id} id={cuisine.type} className={styles.cuisinesList} style={{scrollMarginTop:"45px"}}>
            <h2>Cuisine #{cuisine.id}: {cuisine.title}</h2>
            <img className={styles.image} src={cuisine.image} alt="food image" />
            <p className={styles.content} dangerouslySetInnerHTML={{__html:cuisine.content}}/>
        </div>))}
        {/* </div> */}
        


    </>
  )
}

export default Cuisines