import styles from './Css/blogs.module.css'

import { useEffect, useState } from "react"
// import Post from "./post"
import CommunityBlogs from "./BlogComponents/CommunityBlogs"
import BlogHeroSection from "./BlogComponents/BlogHeroSection"
import LatestBlogs from './BlogComponents/LatestBlogs'
import AdminBlogs from './BlogComponents/AdminBlogs'

function Posts() {
  
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3001/post').then(response=>
        {response.json().then(posts=>
            {setPosts(posts)})})
    },[])
    const adminPosts = posts.filter(post => post.author.email === 'rasoolmaryam57@gmail.com')
  return (
    <div className={styles.blogs}>
      <BlogHeroSection></BlogHeroSection>

        {posts.length > 0 &&
            <LatestBlogs posts={posts}/>
        }

        {adminPosts.length > 0 &&
            <AdminBlogs posts={adminPosts} />
        }

        {posts.length > 0 && 
        <CommunityBlogs posts={posts}/>}

        {/* {posts.length > 0 && posts.map(post => (

            <CommunityBlogs key={post._id} {...post}/>
        ))} */}
    </div>
  )
}

export default Posts