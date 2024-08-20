import React from 'react';
import { Spin } from 'antd';
import styles from './loading-spinner.module.scss';

const LoadingSpinner: React.FC = () => (
  <div className={styles.spinnerContainer}>
    <Spin size='large' />
  </div>
);

export default LoadingSpinner;
