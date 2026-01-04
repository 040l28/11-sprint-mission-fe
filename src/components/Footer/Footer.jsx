import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg';
import instagram from '../../assets/instagram.svg';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>©codeit - 2024</p>

      <nav className={styles.policy}>
        <a href="/">Privacy Policy</a>
        <a href="">FAQ</a>
      </nav>
      
      <nav className={styles.logoImage}>
        <a href="https://www.facebook.com" target="_blank">
          <img src={facebook} alt="페이스북 로고" />
        </a>
        <a href="https://x.com" target="_blank">
          <img src={twitter} alt="트위터 로고" />
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <img src={youtube} alt="유튜브 로고" />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img src={instagram} alt="인스타그램 로고" />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
