import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Secure Authentication Made Simple</h1>
        <p className={styles.subtitle}>
          A modern React application with powerful authentication and user management
        </p>
        <div className={styles.heroButtons}>
          <a href="/sign-up" className={styles.primaryButton}>Get Started</a>
          <a href="/sign-in" className={styles.secondaryButton}>Sign In</a>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>🔒</div>
          <h2>Secure Access</h2>
          <p>Enterprise-grade security with Clerk authentication</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>⚡</div>
          <h2>Lightning Fast</h2>
          <p>Optimized performance for the best user experience</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>🛠️</div>
          <h2>Easy Integration</h2>
          <p>Simple setup with React and modern tools</p>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to get started?</h2>
        <p>Join thousands of developers building secure applications</p>
        <a href="/sign-up" className={styles.primaryButton}>Create Account</a>
      </section>
    </div>
  );
}

export default Home; 