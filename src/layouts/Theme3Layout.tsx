import React, { ReactNode } from 'react';
import styles from '../styles/theme3.module.css';

const Theme3Layout = ({ children }: { children: ReactNode }) => {
  return <div className={styles.grid}>{children}</div>;
};

export default Theme3Layout;