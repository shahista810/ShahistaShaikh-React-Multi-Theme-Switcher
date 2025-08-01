import React, { ReactNode } from 'react';
import styles from '../styles/theme2.module.css';

const Theme2Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>Sidebar Content</aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Theme2Layout;