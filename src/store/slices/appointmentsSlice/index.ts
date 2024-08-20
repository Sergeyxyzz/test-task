import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppointmentsState, FhirAppointmentResponse } from './types';
import { Modal } from 'antd';

const initialState: AppointmentsState = {
  appointments: [],
  status: 'idle',
  error: null,
};

export const fetchAppointments = createAsyncThunk('appointments/fetchAppointments', async () => {
  const response = await axios.get<FhirAppointmentResponse>('https://hapi.fhir.org/baseR4/Appointment?_count=10');
  return response.data.entry.map((entry) => entry.resource);
});

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.appointments = action.payload;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch appointments';
        Modal.error({
          title: 'Error',
          content: state.error,
        });
      });
  },
});

export default appointmentsSlice.reducer;
