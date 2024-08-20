import React from 'react';
import styles from './error-message.module.scss';
import { ErrorMessageProps } from './types';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className={styles.errorContainer}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
