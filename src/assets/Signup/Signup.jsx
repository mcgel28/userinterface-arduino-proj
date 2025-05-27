import { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'
import './Signup.css'
import { BsGoogle } from "react-icons/bs";

function Signup() {
    // Initialize firebase authentication and navigation 
    const auth = getAuth();
    const navigate = useNavigate();

    // State variables for managing authentication state, email, password, and error message
    const [authing, setAuthing] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // Function to handle sign-in with google
    const signUpWithGoogle = async () => {
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
    };

    //Function to handle sign-in with email and password
    const signUpWithEmail = async () => {
        //Check if the passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setAuthing(true);
        setError('');

        // User Firebase to create a new user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then(response => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                setAuthing(false);
            });

    };
  return (
    <div className='signup-section'>
        <div className="container">
            <h1>Sign Up</h1>
            <p>Welcome! Please enter the required information</p>
        <form>    
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Re-Enter Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </form>
        {/* Display error message if there is one */}
        {error && <div className='error'>{error}</div>}
             
        <button className='signup-button' onClick={signUpWithEmail} disabled={authing}>Sign Up with Email and Password</button>
        <hr />
        <button className="google-login" onClick={signUpWithGoogle} disabled={authing}><BsGoogle className='icon' />Sign Up with Google</button>


        <div className="footer-links">
            <p>Already have an account?</p><Link to="/login" className="login">LogIn Here</Link>
            

        </div>
        
        </div>
    </div>
  )
}

export default Signup