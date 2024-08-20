import { RootState } from './../../index';
import { AppointmentsState } from './types';

export const selectAppointments = (state: RootState): AppointmentsState['appointments'] =>
  state.appointments.appointments;
export const selectAppointmentsStatus = (state: RootState): AppointmentsState['status'] => state.appointments.status;
export const selectAppointmentsError = (state: RootState): AppointmentsState['error'] => state.appointments.error;
