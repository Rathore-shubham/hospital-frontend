import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const mockApi = {
  fetchPatients: async () => [
    { id: 1, name: "Shubham Rathore", age: 20, condition: "cold", status: "Admitted" },
  ],

};


export const fetchPatients = createAsyncThunk("patients/fetchPatients", async () => {
  return await mockApi.fetchPatients();
});

export const addPatient = createAsyncThunk("patients/addPatient", async (patient) => {
  return await mockApi.addPatient(patient);
});

export const dischargePatient = createAsyncThunk("patients/dischargePatient", async (id) => {
  return await mockApi.dischargePatient(id);
});

const patientsSlice = createSlice({
  name: "patients",
  initialState: { patients: [], bedsAvailable: 10 },
  reducers: {},

});

export default patientsSlice.reducer;
