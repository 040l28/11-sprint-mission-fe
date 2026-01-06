import styles from './Header.module.css';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="판다마켓 로고" className={styles.logo} />
        </a>
        <nav className={styles.nav}>
          <a href="/" className={styles.navItem}>
            자유게시판
          </a>
          <a href="/" className={styles.navItem}>
            중고마켓
          </a>
        </nav>
      </div>
      <a href="/" className={styles.loginBtn}>
        로그인
      </a>
    </header>
  );
}

export default Header;
