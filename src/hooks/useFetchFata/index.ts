import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import { selectAppointments } from '../../store/slices/appointmentsSlice/selectors';
import { selectPatients } from '../../store/slices/patientsSlice/selectors';
import { fetchAppointments } from '../../store/slices/appointmentsSlice';
import { fetchPatientById } from '../../store/slices/patientsSlice';
import { UseFetchDataResult } from './types';

const useFetchData = (): UseFetchDataResult => {
  const dispatch = useDispatch<AppDispatch>();
  const appointments = useSelector(selectAppointments);
  const patients = useSelector(selectPatients);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        await dispatch(fetchAppointments()).unwrap();

        const patientIds: string[] = [];
        appointments.forEach((appt) => {
          appt.participant.forEach((p) => {
            const reference = p.actor.reference;
            if (reference && reference.includes('Patient/')) {
              const id = reference.split('/')[1];
              if (id && !patientIds.includes(id)) {
                patientIds.push(id);
              }
            }
          });
        });

        await Promise.all(patientIds.map((id) => dispatch(fetchPatientById(id)).unwrap()));

        setLoading(false);
      } catch {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchAllData();
  }, [dispatch, appointments]);

  return {
    loading,
    error,
    patients,
    appointments,
  };
};

export default useFetchData;
