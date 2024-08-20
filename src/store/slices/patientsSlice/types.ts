export interface Patient {
  id: string;
  name: { text?: string; family?: string; given: string[] };
  gender: string;
  birthDate: string;
}

export interface PatientsState {
  patients: Patient[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
