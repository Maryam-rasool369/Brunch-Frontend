// import React from 'react'
import { MdEdit } from "react-icons/md";
import { format } from 'date-fns'
import { useContext, useEffect, useState } from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import styles from './Css/blogDetails.module.css'
import {UserContext} from '../../Context/UserContext'
function PostDetails() {
    const [postInfo,setPostInfo] = useState(null)
    const {id} = useParams()
    const {userEmail} = useContext(UserContext)
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}post/${id}`).then(response =>{
            response.json().then(post=>{
                setPostInfo(post)
            })
        })
    },[])

    const navigate = useNavigate()

    function navigation() {
        navigate(`/editPost/${postInfo._id}`)
    }

    if (!postInfo) {
        return <div className={styles.loading}>Loading<SyncLoader
        color="#4A4A4A" size={6} speedMultiplier={0.5} className={styles.dots} />
        </div>
    }

    return (
        <div className={styles.container}>
            
        {userEmail === postInfo.author.email &&(
             <button onClick={navigation} className={styles.editPostButton}>Edit post <MdEdit className={styles.editPostButtonIcon} /></button>
        )}

            <h1 className={styles.title}>{postInfo.title}</h1>
            <div className={styles.imageContainer}>
                <img src={`${import.meta.env.VITE_API_URL}${postInfo.image}`} alt="Blog" className={styles.image} />
            </div>
            <div className={styles.info}>
                <p className={styles.author}>By {postInfo.author.firstName} {postInfo.author.lastName}</p>
                <time className={styles.date}>{format(new Date(postInfo.createdAt),'d MMM, yyyy ')}</time>
            </div>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
    )
}

export default PostDetails