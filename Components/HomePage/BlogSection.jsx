import { Link } from 'react-router-dom'
import styles from './Css/blogSection.module.css'
import { FaArrowRight } from "react-icons/fa6";
import chef from '../../Assets/HomePage/blogsSection/chef.jpeg'

function BlogSection() {
  return (
    <>
    <div className={styles.blogSection}>
        <img className={styles.image} src={chef} alt="chef" />
        <div className={styles.textSection}>
                <h3 className={styles.heading}>From Street Food to Fine Dining</h3>
                <p className={`${styles.para1}`}>Each story is a window into a different world, a reminder that food is the bridge between cultures, memories, and human connection. Whether it is a simple home-cooked meal or an exotic dish from a faraway land, the experience of sharing food is universal.</p>
                <p className={`${styles.para} ${styles.para1}`}>Want to share your own journey? Join our community of food explorers and storytellers today!</p>
                <p className={`${styles.para} ${styles.para1}`}>Every meal tells a story, carrying the flavors of tradition, innovation, and personal memories. From the warmth of a grandmother’s kitchen to the bustling energy of a night market, food connects us to places, people, and emotions in ways words often cannot. It’s more than just sustenance—it’s a celebration of heritage, creativity, and the shared human experience.</p>
                <Link to={"/blogs"} className={styles.link}>Explore Stories<FaArrowRight />
                </Link>
        </div>
    </div>
    </>
  )
}

export default BlogSection