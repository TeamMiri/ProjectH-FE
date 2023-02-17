import Link from 'next/link';
import styles from './GNB.module.scss';
export default function GNB() {
  return (
    <nav className={styles.Nav}>
      <Link className={styles.NavLogo} href="/">
        ProjectH
      </Link>
      <ul className={styles.NavMenu}>
        <li className={styles.NavMenuItem}>
          <a className={styles.NavMenuLink} href="/home">
            Home
          </a>
        </li>
        <li className={styles.NavMenuItem}>
          <a className={styles.NavMenuLink} href="/about">
            About
          </a>
        </li>
        <li className={styles.NavMenuItem}>
          <a className={styles.NavMenuLink} href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
