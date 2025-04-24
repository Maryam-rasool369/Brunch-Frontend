// import React from 'react'
import styles from './register.module.css'
import LoginBackground from '../Login/LoginBackground'
import {Link, Navigate} from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'

function Register() {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect,setRedirect] = useState(false)

 async function register(event) {
  event.preventDefault();

  const data = { firstName, lastName, email, password };
  console.log('Data being sent:', data); // Log the payload to debug

  const response = await fetch('http://localhost:3001/register', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    credentials:'include'
  });

  if (response.status === 200) {
    toast.success('Registration successful')
    setTimeout(() => setRedirect(true), 1000)
    // alert('Registration successful');
  } else {
    toast.error('Registration failed')
  }
}


  if(redirect){
    return <Navigate to='/'></Navigate>
  }
  return (
<>
      <LoginBackground />
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <h1 className={styles.title}>Register Now</h1>
          <form className={styles.form} action="/" onSubmit={register}>

            <div className={styles.inputBox}>
              <label htmlFor="first_name" className={styles.label}>First Name</label>
              <input
                value={firstName}
                onChange={event => setFirstName(event.target.value)}
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First name"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="last_name" className={styles.label}>Last Name</label>
              <input
               value={lastName}
               onChange={event => setLastName(event.target.value)}
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last name"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                value={email}
                onChange={event => setEmail(event.target.value)}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                value={password}
                onChange={event => setPassword(event.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className={styles.input}
                required
              />
            </div>
            <button type="submit" className={styles.button}>Register</button>
          </form>
          <div className={styles.registerLink}>
            <p className={styles.para}>
              Have an account <Link to="/login" className={styles.link}>Login</Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer position={'top-center'} autoClose={1000}></ToastContainer>

    </>  )
}

export default Register