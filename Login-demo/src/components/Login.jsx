import React from 'react'
import "./login.css"

const Login = () => {


  return (
    <>
    <div className='outter'>
        <div className="login-page">
            <h1 style={{textAlign:"center"}}>Login</h1>
            <div className="form">
                <form className='login-form'>
                    <input type="text" name="" id="" placeholder='username' />
                    <input type="password" name="" id="" placeholder='password'  />
                    <button>Login</button>
                    <p className='message'>Not Registerd? <a href="#">Create an account</a></p>
                </form>
                <button className='login-with-google-btn'>
                    Sign In With Google
                </button>
                <button className='login-with-facebook-btn'>
                    Sign In With Facebook
                </button>
            </div>
        </div>
        <div className='img'>
            <img src='./src\assets\pexels-victor-freitas-841130.jpg' className='img-login'></img>
        </div>
        </div>
    </>
  )
}

export default Login