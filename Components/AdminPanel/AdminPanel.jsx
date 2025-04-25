// import React from 'react'
// import styles from './adminpanel.module.css'
// import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import PendingBlogs from './PendingBlogs'
import PendingRecipes from './PendingRecipes'
import styles from './css/adminpanel.module.css'

function AdminPanel() {
    const [posts,setPosts] = useState([])
    const [recipes,setRecipes] = useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}post`).then(response=>
        {response.json().then(posts=>
            {setPosts(posts)})})
    },[])
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/recipe`).then(response=>
        {response.json().then(recipes=>
            {setRecipes(recipes)})})
    },[])

    const removePost = (postId) =>{
        setPosts(posts.filter(post => post._id !== postId))
    }
    const removeRecipe = (recipeId) =>{
        setRecipes(recipes.filter(recipe => recipe._id !== recipeId))
    }

    const pendingPosts = posts.filter(post=> post.status === "pending")
    const pendingRecipes = recipes.filter(recipe=> recipe.status === "pending")
return (
    <div className={styles.main}>
        <h3 className={styles.heading}>Pending Blogs</h3>

        {pendingPosts.length > 0 ?
            (pendingPosts.map(post => (
                    <PendingBlogs key={post._id} {...post} removePost={removePost} />))
            ):
            (  <div className={styles.pendingPost}>No posts pending</div>)
        }

        <h3 className={styles.heading}>Pending Recipes</h3>
        {pendingRecipes.length > 0 ?
            (pendingRecipes.map(recipe => (
                    <PendingRecipes key={recipe._id} {...recipe} removeRecipe={removeRecipe} />))
            ):
            (  <div className={styles.pendingPost}>No recipes pending</div>)
        }

    </div>
  )
}


export default AdminPanel