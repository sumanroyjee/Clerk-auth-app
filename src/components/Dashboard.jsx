import { useUser } from "@clerk/clerk-react";
import styles from './Dashboard.module.css';

function Dashboard() {
  const { user } = useUser();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.welcome}>Welcome, {user.firstName}!</h1>
        <p>This is your protected dashboard area.</p>
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Profile Overview</h2>
          <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
          <p>Account created: {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Activity</h2>
          <p>Your recent activity will appear here</p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Settings</h2>
          <p>Manage your account preferences</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 