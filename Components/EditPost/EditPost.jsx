// import Quill from "quill"; // Force latest Quill
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate, useParams } from 'react-router-dom';
import styles from "../CreatePost/createpost.module.css";

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

function EditPost() {
        const {id} = useParams();
        const [title,setTitle] = useState('')
        const [summary,setSummary] = useState('')
        const [content,setContent] = useState('')
        const [files,setFiles] = useState('')
        const [redirect,setRedirect] = useState(false)

        useEffect(()=>{
            fetch('http://localhost:3001/post/'+id).then(response=>{response.json().then(postInfo =>{
                setTitle(postInfo.title)
                setContent(postInfo.content)
                setFiles(postInfo.image)
                setSummary(postInfo.summary)
            })})

        },[id])

        async function editPost(event){
            event.preventDefault();
            const data = new FormData();

            data.set('id',id)
            data.set('title', title)
            data.set('summary', summary)
            data.set('content', content)
            if (files?.[0]) {
                data.set('file', files?.[0])
            }
            
            const response = await fetch('http://localhost:3001/post',{
                method:'PUT',
                body:data,
                credentials:'include'
            })
            if (response) {
                setRedirect(true)
            }
        }


        if(redirect){
            return <Navigate to={'/post/'+id}></Navigate>
        }
    
      return (
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.heading}>Edit to make your food blog shine!</h1>
            <p className={styles.subheading}>
              Write, share, and inspire with your delicious food blogs! 🍕🍰
            </p>
          </div>
    
          <form onSubmit={editPost} className={styles.form}>
            <input
                value={title}
                onChange={event => setTitle(event.target.value)}
                type="text"
                placeholder="Title"
                className={styles.input} />
            <input
                value={summary}
                onChange={event => setSummary(event.target.value)}
                type="text"
                placeholder="Summary"
                className={styles.input} />
            <input
                onChange={event => setFiles(event.target.files)}
                type="file"
                name="post_image"
                className={styles.fileInput} />
            <ReactQuill
                value={content}
                onChange={newValue => setContent(newValue)}
                className={styles.editor}
                theme="snow"
                modules={modules}
                formats={formats}/>
            <button type="submit"  className={styles.button}>Post Blog</button>
          </form>
        </div>
      );
}

export default EditPost