import { Appointment } from '../../store/slices/appointmentsSlice/types';
import { Patient } from '../../store/slices/patientsSlice/types';

export interface PatientCardProps {
  patient: Patient;
  appointments: Appointment[];
}
