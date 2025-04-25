// import bowl from
import image from '../../Assets/HomePage/homeBgHeroSection5.png'
import styles from './Css/backgroundImage.module.css'

function BackgroundImage() {
  return (
    <div className={styles.imageDiv}>
        <img src={image} alt="bg" className={styles.image} />
        <img src='/erasebg-transformed small.png' alt="food bowl" className={styles.imageBowl} />

    </div>
  )
}

export default BackgroundImage