import { format } from 'date-fns';
import styles from './Css/allBlogsSummary.module.css';
import { useNavigate } from 'react-router-dom';
import { SyncLoader } from "react-spinners";

function AllBlogsSummary({ posts }) {
  const navigate =useNavigate()
    const TruncatedText = ({text,maxLenght}) =>{
        return(
            <p>
                {text.length > maxLenght ? text.substring(0, maxLenght) + "...":text}
            </p>
        )
       }
  const navigation = (postId) =>{
    navigate(`/blogs/${postId}`)
  }
  if (!posts) {
          return <div className={styles.loading}>Loading<SyncLoader
          color="#4A4A4A" size={6} speedMultiplier={0.5} className={styles.dots} />
          </div>
      }
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post._id} className={styles.post}>
          <div className={styles.imageContainer}>
            <img onClick={()=>navigation(post._id)} src={`${import.meta.env.VITE_API_URL}${post.image}`} alt="Blog" className={styles.image} />
          </div>
          <div onClick={()=>navigation(post._id)} className={styles.content}>
            <div className={styles.info}>
              <p className={styles.author}>{post.author.firstName} {post.author.lastName}</p>
              <time className={styles.date}>{format(new Date(post.createdAt), 'd MMM, yyyy ')}</time>
            </div>
            <h2 className={styles.title}>
            <TruncatedText text={post.title} maxLenght={45} ></TruncatedText>
            </h2>
            <p className={styles.summary}>
            <TruncatedText text={post.summary} maxLenght={120} ></TruncatedText>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllBlogsSummary;
