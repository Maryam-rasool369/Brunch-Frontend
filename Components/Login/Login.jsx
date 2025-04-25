import { Link, Navigate } from 'react-router-dom';
import LoginBackground from './LoginBackground';
import styles from './login.module.css';
import { useContext, useState } from 'react';
import {ToastContainer,toast} from 'react-toastify'
import { UserContext } from '../../Context/UserContext';

function Login() {
    const {setUserEmail} = useContext(UserContext);
  
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [redirect,setRedirect] = useState(false)

    async function login(event) {
        event.preventDefault();
        
        const data = {email,password}
        const response =await fetch(`${import.meta.env.VITE_API_URL}login`,{
            method:'POST',
            body: JSON.stringify(data),
            headers:{'content-Type': 'application/json'},
            credentials:'include'
        })
        if (response.status === 200) {
            
            toast.success('Login successful')
            const userInfo = await response.json();
            setUserEmail(userInfo.email)
            setTimeout(() => setRedirect(true), 1000)
            // alert('Login successful')

        } else {
            toast.error('Login failed')
        }
       
    }
    if(redirect){
        return <Navigate to='/inspireOthers'></Navigate>
    }
  return (
    <>
      <LoginBackground />
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <h1 className={styles.title}>Login</h1>
          <form className={styles.form} 
          action="/"
          onSubmit={login}
          >
            <div className={styles.inputBox}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className={styles.input}
                required
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className={styles.input}
                required
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </div>
            <button type="submit" className={styles.button}>Login</button>
          </form>
          <div className={styles.registerLink}>
            <p className={styles.para}>
              Don’t have an account? <Link to="/register" className={styles.link}>Register now</Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer position={'top-center'} autoClose={1000}></ToastContainer>
    </>
  );
}

export default Login;
