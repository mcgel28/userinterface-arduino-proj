import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from '../src/assets/Login/Login'
import Signup from '../src/assets/Signup/Signup'
import Home from "../src/components/Home/Home"
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { initializeApp } from "firebase/app";
import AuthRoute from './assets/AuthRoute'

const firebaseConfig = {
  apiKey: "AIzaSyCfAArwB9Q8OVNSkYYAZ2inlc_o3mjGpLc",
  authDomain: "arduino-da973.firebaseapp.com",
  projectId: "arduino-da973",
  storageBucket: "arduino-da973.firebasestorage.app",
  messagingSenderId: "222520054313",
  appId: "1:222520054313:web:b167a24b2e97805ae58238"
};

initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<AuthRoute><App /></AuthRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </StrictMode>,
)
