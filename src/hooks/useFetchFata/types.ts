import { Appointment } from '../../store/slices/appointmentsSlice/types';
import { Patient } from '../../store/slices/patientsSlice/types';

export interface UseFetchDataResult {
  loading: boolean;
  error: string | null;
  patients: Patient[];
  appointments: Appointment[];
}
