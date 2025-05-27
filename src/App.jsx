import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../src/components/Navbar/Navbar.jsx'
import Home from './components/Home/Home';
import Schedule from './components/Schedule/Schedule.jsx'
import AddMedicationSection from './components/AddSchedule/AddSchedule.jsx';
import Settings from './components/Settings/Settings.jsx';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/addschedule" element={<AddMedicationSection />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  )
}

export default App
