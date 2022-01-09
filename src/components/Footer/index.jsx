import styles from './Footer.module.css';

import github from '../../assets/github-brands.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.footerIcon} src={github} alt="github-icon" />
      <a href="https://github.com/fachrul-rh/emoji-searcher" target="_blank" rel="noreferrer">
        <span className={styles.footerText}>Source code</span>
      </a>
    </footer>
  );
};

export default Footer;
