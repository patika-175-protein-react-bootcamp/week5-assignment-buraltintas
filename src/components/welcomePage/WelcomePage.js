import { useContext } from 'react';
import { FormContext } from '../context/context';
import ToggleButton from '../toggleButton/ToggleButton';
import styles from './Welcome.module.css';

const WelcomePage = () => {
  const { user, logoutHandler, isDark } = useContext(FormContext);

  return (
    <div
      className={`${styles.welcomePage} ${isDark && styles.darkWelcomePage}`}
    >
      <h1 className={styles.helloText}>Merhaba!</h1>
      <h1 className={`${styles.userName} ${isDark && styles.darkUserName}`}>
        {user.name ? user.name : user.username}{' '}
        {user.surname ? user.surname : ''}
      </h1>

      <button
        onClick={logoutHandler}
        className={`${styles.signoutButton} ${isDark && styles.darkButton}`}
      >
        Çıkış yap
      </button>

      <ToggleButton />
    </div>
  );
};

export default WelcomePage;
