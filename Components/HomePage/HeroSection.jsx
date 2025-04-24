import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import BackgroundImage from './BackgroundImage'
import styles from './Css/heroSection.module.css'

function HeroSection() {
  const{userEmail,setRedirect} = useContext(UserContext)
  const navigate = useNavigate()
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
    <div className={styles.homeMain}>
      
      <div className={styles.headingDiv}>
        <p className={styles.heading}>Combination </p>
        <p className={`${styles.heading} ${styles.underline}`}>of tradition</p>
        <p className={`${styles.heading} ${styles.underline}`}>and moderanity</p>
        <button onClick={navigation} className={`${styles.getCreativeButton}`}>Inspire Others</button>
      </div>
      <div className={styles.headingDivSmall}>
        <div className={styles.text}>
        <p className={styles.heading}>Combination </p>
        <p className={`${styles.heading} ${styles.underline}`}>of tradition</p>
        <p className={`${styles.heading} ${styles.underline}`}>and moderanity</p>
        </div>
        <button onClick={navigation} className={`${styles.getCreativeButton}`}>Inspire Others</button>
      </div>
      <BackgroundImage className={styles.home}></BackgroundImage>
    </div>
    
  )
}

export default HeroSection