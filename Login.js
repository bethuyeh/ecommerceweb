import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import logonew from '../Images/logonew.png';
import './LogIn.css'
import {auth} from './firebase'

const Login = () => {

    const history = useHistory();
    const [useremail, setUserEmail] = useState('')
    const [userpassword, setUserPassword] = useState('')

    const loginuser= event =>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(useremail,userpassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }

    const signupuser = event => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(useremail, userpassword)
        .then(auth => {
            history.push('/');
        })
        .catch(e => alert(e.message))
    }
    
    return (
        <div className='login'>
        <Link>
            <img className='login-logo' src={logonew} alt=''/>
        </Link>
            <div className='login-container'>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={useremail} onChange={event=>setUserEmail(event.target.value)} type='Email' />
                    <h5>Password</h5>
                    <input value={userpassword} onChange={event=>setUserPassword(event.target.value)} type='password' />
                    <button onClick={loginuser} type='submit' className='login-button'>Sign in</button>
                </form>
                <p>By signing in you agree to our terms and conditions</p>
                <button onClick={signupuser} className='login-register'>Create an account with us</button>
            </div>
        </div>
    ) 
}

export default Login
