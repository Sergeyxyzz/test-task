import React from 'react';
import styles from './main-page.module.scss';
import PatientCard from '../patient-card';
import LoadingSpinner from '../../shared/components/loading-spinner';
import ErrorMessage from '../../shared/components/error-message';
import useFetchData from '../../hooks/useFetchFata';

const MainPage: React.FC = () => {
  const { loading, error, patients, appointments } = useFetchData();

  const getAppointmentsForPatient = (patientId: string) => {
    return appointments.filter((appt) => appt.participant.some((p) => p.actor.reference === `Patient/${patientId}`));
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  const uniquePatients = patients.filter((patient) => patient.id);

  return (
    <div className={styles.app}>
      <div className={styles.patientCardContainer}>
        {uniquePatients.length > 0 ? (
          uniquePatients.map((patient) => {
            const patientAppointments = getAppointmentsForPatient(patient.id);
            return <PatientCard key={patient.id} patient={patient} appointments={patientAppointments} />;
          })
        ) : (
          <p>No patients found.</p>
        )}
      </div>
    </div>
  );
};

export default MainPage;
