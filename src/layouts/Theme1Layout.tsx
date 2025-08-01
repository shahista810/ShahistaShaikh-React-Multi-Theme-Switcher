import React, { ReactNode } from 'react';
import styles from '../styles/theme1.module.css';

const Theme1Layout = ({ children }: { children: ReactNode }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Theme1Layout;