// import { Link,} from 'react-router-dom';
import styles from "./createpost.module.css"; // Import CSS module
import { GrHomeRounded } from "react-icons/gr";

import CreateBlogs from './Blogs/CreateBlogs';
import { useContext, useEffect, useState } from 'react';
import CreateRecipes from "./Recipes/CreateRecipes";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

function CreatePost() {
  const {redirect,setRedirect} = useContext(UserContext)
  const [button,setButton] = useState("blog")
  // const [redirect,setRedirect] = useState(false)
  // const location = useLocation()

  const handleButtonClick = (option) =>{
    setButton(option)
  }

  const redirection = (option) =>{
    setRedirect(option)
  }

  useEffect(()=>{
    // setRedirect(false)
    if(redirect){
      //Only for rerendering when
        }
  },[redirect])

  if(redirect){
    return (

      <div className={styles.main}>
         <h3 className={styles.approval}>Wait for admin approval</h3>
         <Link className={styles.redirect} to='/'>Go to home page <GrHomeRounded className={styles.icon}/></Link>
      </div>
     )
}
  
  
  return (
    <>
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Create, Share, Inspire</h1>
        <p className={styles.subheading}>Bring your recipes and stories to life with every post.
        </p>
        <div className={styles.buttons}>
          <button className={`${styles.blogs} ${button === 'blog' ? styles.active : styles.inactive}`} onClick={() => handleButtonClick("blog")}>Blogs</button>
          <button className={`${styles.recipes} ${button === 'recipes' ? styles.active : styles.inactive}`} onClick={() => handleButtonClick("recipes")}>Recipes</button>
        </div>
      </div>
      {button === "blog" && <CreateBlogs redirection={redirection}/>}
      {button === "recipes" && <CreateRecipes redirection={redirection}/>}

    </div>
    </>

     
  );
}

export default CreatePost;
