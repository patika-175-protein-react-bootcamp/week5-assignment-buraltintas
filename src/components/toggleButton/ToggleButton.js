import { useContext } from 'react';
import { FormContext } from '../context/context';
import lightButton from '../../assets/lightButton.png';
import darkButton from '../../assets/darkButton.png';

import styles from './ToggleButton.module.css';

const ToggleButton = () => {
  const { isDark, handleDarkLightModes } = useContext(FormContext);

  return (
    <img
      onClick={handleDarkLightModes}
      className={styles.toggleButton}
      src={isDark ? lightButton : darkButton}
      alt='dark/light toggle button'
    />
  );
};

export default ToggleButton;
