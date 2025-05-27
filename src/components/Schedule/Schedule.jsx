import React from "react";
import './Schedule.css'
import imgplaceholder from '../../assets/Assets/imgplaceholder.png'

import { FaBars } from "react-icons/fa";


const medications = [
  { name: "Medicine 1", time: <FaBars /> },
  { name: "Medicine 2", time: <FaBars /> },
  { name: "Medicine 3", time: <FaBars /> },
  { name: "Medicine 4", time: <FaBars /> },
  { name: "Medicine 5", time: <FaBars /> },
];

export default function MedicationScreen() {
  return (
    <div id="schedule-section">
      <div className="container">
      <header className="header">
        <div className="user-info">
          <img src={imgplaceholder} alt="User" className="avatar"/>
          <span className="welcome-text">Juan Tamad</span>
        </div>
      </header>
    
      <section className="date-section">
        <h2>Upcoming Medication Schedule</h2>
        <div className="date-label">{new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})} </div>
      </section>

      <section className="medications">
        {medications.map((med, index) => (
          <div className="med-card" key={index}>
            <div className="med-info">
              <div className="pill-icon">💊</div>
              <div>
                <div className="med-name">{med.name}</div>
                <div className="med-status">Status -</div>
              </div>
            </div>
            <div className="med-time">{med.time}</div>
          </div>
        ))}
      </section>

      </div>
    </div>
  );
}
