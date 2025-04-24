import { format } from 'date-fns';
import styles from './Css/allBlogsSummary.module.css';
import { useNavigate } from 'react-router-dom';

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
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post._id} className={styles.post}>
          <div className={styles.imageContainer}>
            <img onClick={()=>navigation(post._id)} src={`http://localhost:3001/${post.image}`} alt="Blog" className={styles.image} />
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
