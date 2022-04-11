import { useContext } from 'react';
import { FormContext } from './components/context/context';

import PhotoArea from './components/photoArea/PhotoArea';
import styles from './App.module.css';
import SignupArea from './components/signupArea/SignupArea';
import WelcomePage from './components/welcomePage/WelcomePage';

function App() {
  const { isLoggedIn } = useContext(FormContext);

  return (
    <div className={styles.homePage}>
      <PhotoArea />
      {!isLoggedIn ? <SignupArea /> : <WelcomePage />}
    </div>
  );
}

export default App;
