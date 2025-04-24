import styles from '../Css/blogHeroSection.module.css'

function BlogHeroSection() {
  return (
    <div className={styles.heroSection}>
        <h1 className={styles.heading}>Blog</h1>
        <p className={styles.para}>Discover delicious recipes, cooking tips, and food stories from around the world.</p>
    </div>
  )
}

export default BlogHeroSection