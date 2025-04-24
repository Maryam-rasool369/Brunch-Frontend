import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import AllBlogsSummary from './AllBlogsSummary';
import styles from './Css/allBlogs.module.css'

function AllBlogs() {
  const [posts, setPost] = useState([])
  const location =useLocation();
  const [params] = useSearchParams(location.search)
  const type = params.get('type')
  useEffect(()=>{
    fetch('http://localhost:3001/post').then(response => {response.json().then(posts =>{setPost(posts)})})

  },[type])

  const latestBlogs = [...posts].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))

  const adminBlogs = posts.filter(post => post.author.email ==='rasoolmaryam57@gmail.com')

  const communityBlogs = posts.filter(post => post.author.email !== "rasoolmaryam57@gmail.com")


  return (
    <>
    {type === "latestBlogs" && (
      <>
      <div className={styles.top}>
        <h1 className={styles.heading}>Latest Blogs</h1>
        {/* <p className={styles.para}>Blogs</p> */}
      </div>
        
        <AllBlogsSummary posts={latestBlogs}/>
      </>
    )}

    {type === "adminBlogs" && (
          <>
          <div className={styles.top}>
            <h1 className={styles.heading}>Admin Blogs</h1>
            {/* <p className={styles.para}>Blogs</p> */}
          </div>
            <AllBlogsSummary posts={adminBlogs}/>
          </>
    )}
    
    {type === "communityBlogs" &&(
    <>
    <div className={styles.top}>
      <h1 className={styles.heading}>Community Blogs</h1>
      {/* <p className={styles.para}>Blogs</p> */}
    </div>
      <AllBlogsSummary posts={communityBlogs}/>
     </>
    )}
      
    </>
  )
}

export default AllBlogs