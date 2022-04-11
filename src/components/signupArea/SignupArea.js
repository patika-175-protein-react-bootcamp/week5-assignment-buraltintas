import { useContext } from 'react';
import styles from './SignupArea.module.css';
import Form from '../form/Form';
import { FormContext } from '../context/context';
import ToggleButton from '../toggleButton/ToggleButton';

const SignupArea = () => {
  const { isDark } = useContext(FormContext);

  return (
    <div className={`${styles.signupAreaContainer} ${isDark && styles.dark}`}>
      <div
        className={`${styles.headingContainer} ${
          isDark && styles.darkHeadingContainer
        }`}
      >
        <h1
          className={`${styles.singupHeading} ${isDark && styles.darkHeading}`}
        >
          Kayıt
        </h1>
      </div>
      <Form />
      <ToggleButton />
    </div>
  );
};

export default SignupArea;
