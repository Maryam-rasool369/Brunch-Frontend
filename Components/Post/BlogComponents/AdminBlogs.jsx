import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { FaArrowRight } from "react-icons/fa6";
import styles from '../Css/adminBlogs.module.css'



function AdminBlogs({posts}) {
  const TruncatedText = ({text,maxLenght}) =>{
    return(
        <p>
            {text.length > maxLenght ? text.substring(0, maxLenght) + "..." :text}
        </p>
    )
   }
  return (
    <>
        <div className={styles.top}>
            <Link to={'/blogs/allBlogs?type=adminBlogs'}  className={styles.topHeading}>By Admin</Link>
            <Link to={'/blogs/allBlogs?type=adminBlogs'} className={styles.seeMore}>see more <FaArrowRight className={styles.arrow}/></Link>
        </div>
        <Swiper
          className={styles.swiper}
          spaceBetween={0}
          slidesPerView={2}
          navigation={true}
          loop={true}
          style={{ "--swiper-navigation-color": "gray",
            "fontSize":"10px"
           }}
          modules={[Navigation]}
          speed={800} // Adjust speed (500ms = 0.5s)
          breakpoints={{
            320: { slidesPerView: 1 }, // 1 blog on small screens
            700: { slidesPerView: 2}, // 2 blogs on medium screens
            1000: { slidesPerView: 3}  // 3 blogs on large screens
          }}
        >
            {posts.filter((post)=> post.status === "approved").map(post =>(
            <SwiperSlide key={post._id} className={styles.swiper_slide}>
                
                <div className={styles.posts}>
                <div className={styles.image}>
                    <Link to={`/blogs/${post._id}`} className={styles.link}>
                    <img src={`${import.meta.env.VITE_API_URL}${post.image}`} alt="img" />
                    </Link>
                </div>
                <div className={styles.text}>
                    <Link to={`/blogs/${post._id}`} className={styles.link}>
                    
                    <div className={styles.info}>
                        <span className={styles.author}>{post.author?.firstName} {post.author?.lastName}</span>
                        <time className={styles.date}>{format(new Date(post.createdAt), 'd MMM, yyyy ')}</time>
                    </div>
                    <h2 className={styles.heading}>
                    <TruncatedText text={post.title} maxLenght={35} ></TruncatedText>

                    </h2>
                    </Link>
                </div>
                </div>
            </SwiperSlide>))}
        </Swiper>
    </>
  )
}

export default AdminBlogs