import Quill from "quill"; // Force latest Quill
import {useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link,} from 'react-router-dom';
import styles from "./createBlogs.module.css"; // Import CSS module
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

function CreateBlogs({redirection}) {

    const [title,setTitle] = useState('')
    const [summary,setSummary] = useState('')
    const [content,setContent] = useState('')
    const [files,setFiles] = useState('')
    // const [redirect,setRedirect] = useState(false)


    async function createNewPost(event) {

        const data = new FormData();
        data.set('title', title)
        data.set('summary', summary)
        data.set('content', content)
        data.set('file', files[0])

        event.preventDefault();

        const response = await fetch('http://localhost:3001/post',{
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
      <form onSubmit={createNewPost} className={styles.form}>
        <input
            value={title}
            required
            onChange={event => setTitle(event.target.value)}
            type="text"
            placeholder="Title"
            className={styles.input} />
        <input
            value={summary}
            required
            onChange={event => setSummary(event.target.value)}
            type="text"
            placeholder="Summary"
            className={styles.input} />
        <input
            onChange={event => setFiles(event.target.files)}
            required
            type="file"
            name="post_image"
            className={styles.fileInput} />
        <ReactQuill
            value={content}
            required
            onChange={newValue => setContent(newValue)}
            className={styles.editor}
            modules={modules}
            formats={formats}/>
        <button type="submit"  className={styles.button}>Post Blog</button>
      </form>
  );
}

export default CreateBlogs;
