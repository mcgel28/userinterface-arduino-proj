import React, { useState } from 'react';
import './AddSchedule.css';
import inhaler from "../../assets/Assets/inhaler.png"
import injection from "../../assets/Assets/injection.png"
import pills from "../../assets/Assets/pills.png"
import syrup from "../../assets/Assets/syrup.png"

export default function AddMedicationSection({ onAdd }) {
  const [medName, setMedName] = useState('');
  const [medTime, setMedTime] = useState('');

  const [selectedType, setSelectedType] = useState(null);
  const icons = [pills, syrup, inhaler, injection];
  const called = ['Pills','Syrup', 'Inhaler', 'Injection'];

  const [duration, setDuration] = useState("1 Month");
  const [frequency, setFrequency] = useState("Daily");

//Handles the function of time medication
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!medName || !medTime) return;

    onAdd({ name: medName, time: medTime });
    setMedName('');
    setMedTime('');
  };

  const handleReminder = () => {
    alert(`Reminder set!\nDuration: ${duration}\nFrequency: ${frequency}`);
  };

  return (
    <div id="add-med-section">
      <div className="container">
      <h2>Add New Medication</h2>
      <form onSubmit={handleSubmit} className="add-med-form">
        <input
          type="text"
          placeholder="Medication Name"
          value={medName}
          onChange={(e) => setMedName(e.target.value)}
        />
        <input
          type="time"
          value={medTime}
          onChange={(e) => setMedTime(e.target.value)}
        />
      </form>
     

      <div className="form-group">
        <label>Type</label>
        <div className="type-icons">
          {icons.map((icon, index) => (
            <div
              key={index}
              className={`icon-box ${selectedType === index ? "selected" : ""}`}
              onClick={() => setSelectedType(index)}
            >
              <img src={icon} alt={`type${index + 1}`} />
              <span className="icon-label">{called[index]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="form-group-time">
        <label>Time & Schedule</label>
        <div className="time-buttons">
          <button className="btn blue">After Breakfast</button>
          <button className="btn pink">After Dinner</button>
          <button className="btn plus">+</button>
        </div>
      </div>

      <div className="form-group half">
        <div>
          <label>Duration</label>
          <select value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="3 Months">Less then a week</option>
            <option value="1 Week">1 Week</option>
            <option value="2 Weeks">2 Weeks</option>
            <option value="2 Weeks">3 Weeks</option>
            <option value="1 Month">1 Month</option>
            <option value="3 Months">2 Months</option>
            <option value="3 Months">3 Months</option>
          </select>
        </div>
        <div>
          <label>Frequency</label>
          <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
            <option value="Daily">Daily</option>
            <option value="Twice a Day">Twice a Day</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>
      </div>

      <button className="add-reminder" onClick={handleReminder}>
        Add Reminder
      </button>
    </div>
    </div>
  );
}
