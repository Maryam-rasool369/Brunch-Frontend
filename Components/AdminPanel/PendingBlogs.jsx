// import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import styles from './css/pendingBlogs.module.css'

function PendingBlogs({_id,title,summary,image,createdAt,author,removePost}) {

    const TruncatedText = ({text,maxLenght}) =>{
        return(
            <p>
                {text.length > maxLenght ? text.substring(0, maxLenght) + "..." :text}
            </p>
        )
       }
    // const {postStatus,setPostStatus} = useContext(UserContext)
    async function approveBlog() {
        const response = await fetch(`${import.meta.env.VITE_API_URL}post/${_id}`,{
            method:'PATCH',
            credentials:'include',
            // data:data
        }
    )
    if (response.ok) {
        removePost(_id)
    }
    }
    async function deleteBlog() {
        const response = await fetch(`${import.meta.env.VITE_API_URL}post/${_id}`,{
            method:'DELETE',
            credentials:'include',
        }
    )
    if (response.ok) {
        removePost(_id)
    }
    }
    return (
        <>
            <div className={styles.post}>
                <div className={styles.image}>
                    <Link to={`/blogs/${_id}`} className={styles.link}>
                        <img src={`${import.meta.env.VITE_API_URL}/` + image} alt="img" />
                    </Link>
                </div>
                <div className={styles.text}>
                    <Link to={`/blogs/${_id}`} className={styles.link}>
                        <h2>
                        <TruncatedText text={title} maxLenght={25} ></TruncatedText>

                        </h2>
                    </Link>
                    <p className={styles.info}>
                        <span className={styles.author}>{author?.firstName} {author?.lastName}</span> <br />
                        <time className={styles.time}>{format(new Date(createdAt), 'd MMM, yyyy ')}</time>
                    </p>
                    <p className={styles.summary}>
                    <TruncatedText text={summary} maxLenght={45} ></TruncatedText>
                    </p>
                </div>
                <div className={styles.buttons}>
                    <button onClick={approveBlog} className={styles.approve}>Approve</button>
                    <button onClick={deleteBlog} className={styles.decline}>Decline</button>
                </div>
            </div>

        </>
    );
    
}

export default PendingBlogs