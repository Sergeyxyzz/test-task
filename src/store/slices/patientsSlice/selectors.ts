import { RootState } from './../../index';

import { PatientsState } from './types';

export const selectPatients = (state: RootState): PatientsState['patients'] => state.patients.patients;
export const selectPatientStatus = (state: RootState): PatientsState['status'] => state.patients.status;
export const selectPatientError = (state: RootState): PatientsState['error'] => state.patients.error;
