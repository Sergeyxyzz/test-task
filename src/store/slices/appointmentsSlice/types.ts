export interface Appointment {
  id: string;
  start: string;
  description: string;
  participant: { actor: { reference: string } }[];
}

export interface AppointmentsState {
  appointments: Appointment[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface FhirAppointmentEntry {
  resource: Appointment;
}

export interface FhirAppointmentResponse {
  entry: FhirAppointmentEntry[];
}

export interface Name {
  text?: string;
  family?: string;
  given: string[];
}

export interface Patient {
  name?: Name[];
  gender?: string;
  birthDate?: string;
}
