import styles from '../Footer/Footer.module.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.api}>The API</p>
        <Link
        className={styles.rawg}
        to="/https://rawg.io/"
        >rawg.io</Link>
      </footer>
    </>
  );
}

export default Footer;