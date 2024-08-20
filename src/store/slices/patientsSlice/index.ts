import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PatientsState } from './types';
import { Modal } from 'antd';

const initialState: PatientsState = {
  patients: [],
  status: 'idle',
  error: null,
};

export const fetchPatientById = createAsyncThunk('patients/fetchPatientById', async (patientId: string) => {
  const response = await axios.get(`https://hapi.fhir.org/baseR4/Patient/${patientId}`);
  return response.data;
});

const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatientById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPatientById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (!state.patients.some((patient) => patient.id === action.payload.id)) {
          state.patients.push(action.payload);
        }
      })
      .addCase(fetchPatientById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch patient';
        Modal.error({
          title: 'Error',
          content: state.error,
        });
      });
  },
});

export default patientsSlice.reducer;
