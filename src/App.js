import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients, addPatient, dischargePatient } from "./features/patient";


const App = () => {
  const dispatch = useDispatch();
  const { patients, bedsAvailable } = useSelector((state) => state.patients);

  const [formData, setFormData] = useState({ name: "", age: "", condition: "" });

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  const handleAddPatient = (e) => {
    e.preventDefault();
    if (bedsAvailable) {
      dispatch(addPatient(formData));
      setFormData({ name: "", age: "", condition: "" });
    } else {
      alert("No beds available!");
    }
  };

  const handleDischarge = (id) => {
    dispatch(dischargePatient(id));
  };

  return (
    <div className="App">
      <header>
        <h1>Hospital Management System</h1>
      </header>

      <div className="add-patient-form">
        <h2>Add Patient</h2>
        <form onSubmit={handleAddPatient}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Condition"
            value={formData.condition}
            onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
            required
          />
          <button type="submit">Add Patient</button>
        </form>
      </div>

      <div className="patients-list">
        <h2>Patients List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Condition</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.condition}</td>
                <td>{patient.status}</td>
                <td>
                  {patient.status === "Admitted" && (
                    <button onClick={() => handleDischarge(patient.id)}>Discharge</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
