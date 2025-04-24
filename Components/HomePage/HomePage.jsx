import styles from './Css/homePage.module.css'
import BlogSection from './BlogSection'
import HeroSection from './HeroSection'
import RecipeSection from './RecipeSection'

function HomePage() {
  
  return (
    <div className={styles.main}>
      <HeroSection></HeroSection>
      <BlogSection></BlogSection>
      <RecipeSection></RecipeSection>
    </div>

  )
}

export default HomePage