import React from 'react';
import styles from './patient-card.module.scss';
import { PatientCardProps } from './types';

const PatientCard: React.FC<PatientCardProps> = ({ patient, appointments }) => {
  const patientName =
    Array.isArray(patient.name) && patient.name.length > 0 ? patient.name[0] : { family: 'Unknown', given: [] };
  const name = patientName.text || `${patientName.family || 'Unknown'} ${patientName.given.join(' ')}`;
  const gender = patient.gender || 'Unknown';
  const birthDate = patient.birthDate || 'Unknown';

  return (
    <div className={styles.patientCardItem}>
      <h3>{name}</h3>
      <p>Gender: {gender}</p>
      <p>Birth Date: {birthDate}</p>
      <div>
        <h4>Appointments</h4>
        {appointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          <ul>
            {appointments?.map((appt) => (
              <li key={appt.id}>
                <p>Start: {new Date(appt.start).toLocaleString()}</p>
                <p>Description: {appt.description || 'No description'}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PatientCard;
