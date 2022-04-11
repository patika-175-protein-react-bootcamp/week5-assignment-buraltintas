import React, { useState } from 'react';

const FormContext = React.createContext();

const FormProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setUser({});
  };

  const submitHandler = (auth) => {
    setIsLoading(true);
    setTimeout(() => {
      setUser(auth);
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 2000);
  };

  const handleDarkLightModes = () => {
    setIsDark((x) => !x);
  };

  const handleCheckbox = () => {
    setIsChecked((x) => !x);
  };

  return (
    <FormContext.Provider
      value={{
        isChecked,
        isDark,
        handleCheckbox,
        handleDarkLightModes,
        submitHandler,
        user,
        isLoggedIn,
        logoutHandler,
        isLoading,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
