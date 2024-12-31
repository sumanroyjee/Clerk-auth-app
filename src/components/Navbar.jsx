import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.leftSection}>
        <Link to="/" className={styles.link}>Home</Link>
        <SignedIn>
          <Link to="/dashboard" className={styles.link}>Dashboard</Link>
        </SignedIn>
      </div>
      <div className={styles.authSection}>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link to="/sign-in" className={styles.link}>Sign In</Link>
          <Link to="/sign-up" className={styles.link}>Sign Up</Link>
        </SignedOut>
      </div>
    </nav>
  );
}

export default Navbar; 