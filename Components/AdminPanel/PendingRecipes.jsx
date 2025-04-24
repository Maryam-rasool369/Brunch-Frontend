import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import styles from './css/pendingRecipes.module.css'

function PendingRecipes({_id,title,prepTime,cookTime,image,createdAt,author,removeRecipe}) {

    const TruncatedText = ({text,maxLenght}) =>{
        return(
            <p>
                {text.length > maxLenght ? text.substring(0, maxLenght) + "..." :text}
            </p>
        )
       }
    // const {postStatus,setPostStatus} = useContext(UserContext)
    async function approveRecipe() {
        const response = await fetch(`http://localhost:3001/recipe/${_id}`,{
            method:'PATCH',
            credentials:'include',
            // data:data
        }
    )
    if (response.ok) {
        removeRecipe(_id)
    }
    }
    async function deleteRecipe() {
        const response = await fetch(`http://localhost:3001/recipe/${_id}`,{
            method:'DELETE',
            credentials:'include',
        }
    )
    if (response.ok) {
        removeRecipe(_id)
    }
    }
  return (
    <>
            <div className={styles.post}>
                <div className={styles.image}>
                    <Link to={`/blogs/${_id}`} className={styles.link}>
                        <img src={'http://localhost:3001/' + image} alt="img" />
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
                    <p className={styles.paras}>{prepTime}</p>
                    <p className={styles.paras}>{cookTime}</p>
                </div>
                <div className={styles.buttons}>
                    <button onClick={approveRecipe} className={styles.approve}>Approve</button>
                    <button onClick={deleteRecipe} className={styles.decline}>Decline</button>
                </div>
            </div>

        </>
  )
}

export default PendingRecipes