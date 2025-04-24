import { Link } from 'react-router-dom'
import styles from './Css/recipeSection.module.css'
import { FaArrowRight } from 'react-icons/fa6'
import recipe6 from '../../Assets/HomePage/recipes/recipe6.jpeg'


function RecipeSection() {
  return (
    <div className={styles.recipeContainer}>
        <div className={styles.textSection}>
                <h3 className={styles.heading}>Recipes Passed Through Generations</h3>
                {/* <h3 className={styles.heading}>A Taste of Heritage</h3> */}
                <p className={`${styles.para1}`}>Recipes are more than instructions—they are whispers from the past, carrying the laughter, love, and wisdom of those who came before us. Every ingredient tells a story, every dish holds a memory.</p>
                <p className={`${styles.para} ${styles.para1}`}>The scent of a familiar dish can transport us back to childhood, to family gatherings, to moments of love and togetherness. Recipes passed down through generations are not just meals; they are pieces of history on a plate.</p>
                <p className={`${styles.para} ${styles.para1}`}>A grandmother’s old cookbook, a mother’s careful instructions, the joy of learning a family secret—these recipes are more than food; they are the ties that bind us to our past.</p>
                <Link to={"/blogs"} className={styles.link}>Discover Timeless Recipes<FaArrowRight />
                </Link>
        </div>
        <div className={styles.imagesContainer}>
            <img className={styles.image} src={recipe6} alt="img" />
        </div>
    </div>
  )
}

export default RecipeSection