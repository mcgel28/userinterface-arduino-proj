import { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'
import logo from '../Assets/logo.png'
import { BsGoogle } from "react-icons/bs";


function Login() {
    // Initialize firebase authentication and navigation 
    const auth = getAuth();
    const navigate = useNavigate();

    // State variables for managing authentication state, email, password, and error message
    const [authing, setAuthing] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Function to handle sign-in with google
    const signInWithGoogle = async () => {
        setAuthing(true);

        // Use firebase to sign-in with google
        signInWithPopup(auth, new GoogleAuthProvider())
            .then(response => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setAuthing(false);
            });
    }

    //Function to handle sign-in with email and password
    const signInWithEmail = async () => {
        setAuthing(true);
        setError('');

        //  Use firebase to sign-in with email and password
        signInWithEmailAndPassword(auth, email, password)
            .then(response => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                setAuthing(false);
            });
    }

  return (
    
        <div className="login-section">
            <div className="container">
            <img className="logo" src={logo} alt="logo of the app" />
        
            <h1>Login</h1>
            <p>Sign in to continue.</p>
                <form>    
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='login-button'onClick={signInWithEmail} disabled={authing}>Log In with Email and Password</button>
                {error &&<div className='error'>{error}</div>}
                <hr />  
                <button className='google-login' onClick={signInWithGoogle} disabled={authing}><BsGoogle className='icon' />Log In with Google</button>



            <div className="footer-links">
                <Link to="/">Forgot Password?</Link>
                <Link to="/signup" className="signup">Sign Up Here</Link>
            </div>
            </form>
            </div>
        </div>
   
  )
}

export default Login