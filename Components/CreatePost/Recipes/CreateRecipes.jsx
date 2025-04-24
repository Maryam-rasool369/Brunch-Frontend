// import React from 'react'

import Quill from "quill"; // Force latest Quill
import {useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link, redirect,} from 'react-router-dom';
import styles from "./createRecipes.module.css"; // Import CSS module
// import { UserContext } from "../../Context/UserContext";
ReactQuill.Quill = Quill; // Override Quill version

 // Define the toolbar options (modules)
 const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'align': [] }],
      ['link', 'image'],
      ['blockquote', 'code-block'],
    ],
  };

  // Define allowed formats for the editor
  const formats = [
    'header', 'font', 'list', 'bullet', 'bold', 'italic', 'underline',
    'strike', 'align', 'link', 'image', 'blockquote', 'code-block'
  ];

function CreateRecipes({redirection}) {

    const [title,setTitle] = useState('')
    const [prepTime,setPrepTime] = useState('')
    const [cookTime,setCookTime] = useState('')
    const [serves,setServes] = useState('')
    const [files,setFiles] = useState('')
    const [summary,setSummary] = useState('')
    const [preparation,setPreparation] = useState('')

    // const [redirect,setRedirect] = useState(false)


    async function createNewRecipe(event) {

        const data = new FormData();
        data.set('title', title)
        data.set('prepTime', prepTime)
        data.set('cookTime', cookTime)
        data.set('serves', serves)
        data.set('file', files[0])
        data.set('summary', summary)
        data.set('preparation', preparation)

        event.preventDefault();

        const response = await fetch('http://localhost:3001/recipe',{
            method:'POST',
            body:data,
            credentials:'include'
        })

        if (response.status ===200) {
            console.log("Redirected")
            redirection(true)
            // setRedirect(true)
        }
    }

    // function navigation() {
    //   <Navigate to='/'></Navigate>
    // }
    // if(redirect){
    //     return (
    //       <>
    //          <p className={styles.approval}>Wait for admin approval</p>
             
    //          <Link className={styles.redirect} to='/'>Go to home page</Link>
    //       </>
    //      )
    // }
  return (
    <form onSubmit={createNewRecipe} className={styles.form}>
            <input
                value={title}
                required
                onChange={event => setTitle(event.target.value)}
                type="text"
                placeholder="Title"
                className={styles.input} />
            <input
                value={prepTime}
                required
                onChange={event => setPrepTime(event.target.value)}
                type="text"
                placeholder="Prep Time"
                className={styles.input} />
            <input
                value={cookTime}
                required
                onChange={event => setCookTime(event.target.value)}
                type="text"
                placeholder="Cook Time"
                className={styles.input} />
            <input
                value={serves}
                required
                onChange={event => setServes(event.target.value)}
                type="text"
                placeholder="Servings"
                className={styles.input} />
            <input
                onChange={event => setFiles(event.target.files)}
                required
                type="file"
                name="post_image"
                className={styles.fileInput} />
            <input
                value={summary}
                required
                onChange={event => setSummary(event.target.value)}
                type="text"
                placeholder="Recipe Summary"
                className={styles.input} />
            <ReactQuill
                value={preparation}
                required
                onChange={newValue => setPreparation(newValue)}
                placeholder="Ingredients and Preparation"
                className={styles.editor}
                modules={modules}
                formats={formats}/>
            <button type="submit"  className={styles.button}>Post Recipes</button>
          </form>
  )
}

export default CreateRecipes