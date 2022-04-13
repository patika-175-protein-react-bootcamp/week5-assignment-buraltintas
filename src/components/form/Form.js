import { useContext } from 'react';
import { Formik } from 'formik';
import styles from './Form.module.css';
import { FormContext } from '../context/context';
import { LoginSchema } from '../yup/yupSchema';

const Form = () => {
  const { isDark, submitHandler, isLoading } = useContext(FormContext);

  return (
    <div className={styles.fromContainer}>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          username: '',
          password: '',
          passwordConfirm: '',
          checkbox: false,
        }}
        onSubmit={(auth) => {
          submitHandler(auth);
        }}
        validationSchema={LoginSchema}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          handleBlur,
          touched,
        }) => (
          <form className={styles.form}>
            <div className={styles.nameAndSurnameContainer}>
              <div className={styles.nameContainer}>
                <label
                  className={isDark ? styles.darkLabel : ''}
                  htmlFor='name'
                >
                  İSİM
                </label>
                <input
                  className={isDark ? styles.dark : ''}
                  type='text'
                  id='name'
                  name='name'
                  placeholder='İsmini gir'
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.nameContainer}>
                <label
                  className={isDark ? styles.darkLabel : ''}
                  htmlFor='surname'
                >
                  SOYİSİM
                </label>
                <input
                  className={isDark ? styles.dark : ''}
                  type='text'
                  id='surname'
                  name='surname'
                  placeholder='Soyismini gir'
                  value={values.surname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.labelAndInput}>
              <label
                className={`${styles.requiredLabel} ${
                  isDark && styles.darkLabel
                }`}
                htmlFor='email'
              >
                E-POSTA
              </label>
              <input
                className={isDark ? styles.dark : ''}
                id='email'
                type='email'
                name='email'
                placeholder='E-posta adresini gir'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <span className={styles.emailError}>
                {touched.email && errors.email}
              </span>
            </div>
            <div className={styles.labelAndInput}>
              <label
                className={`${styles.requiredLabel} ${
                  isDark && styles.darkLabel
                }`}
                htmlFor='username'
              >
                KULLANICI ADI
              </label>
              <input
                className={isDark ? styles.dark : ''}
                id='username'
                type='text'
                name='username'
                placeholder='Kullanıcı adını gir'
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className={styles.usernameError}>
                {touched.username && errors.username}
              </span>
            </div>
            <div className={styles.labelAndInput}>
              <label
                className={`${styles.requiredLabel} ${
                  isDark && styles.darkLabel
                }`}
                htmlFor='password'
              >
                ŞİFRE
              </label>
              <input
                className={isDark ? styles.dark : ''}
                id='password'
                type='password'
                name='password'
                placeholder='Şifreni gir'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className={styles.passwordError}>
                {touched.password && errors.password}
              </span>
            </div>
            <div className={styles.labelAndInput}>
              <label
                className={`${styles.requiredLabel} ${
                  isDark && styles.darkLabel
                }`}
                htmlFor='passwordConfirm'
              >
                ŞİFRENİ TEKRAR GİR
              </label>
              <input
                className={isDark ? styles.dark : ''}
                id='passwordConfirm'
                type='password'
                name='passwordConfirm'
                placeholder='Şifreni doğrula'
                value={values.passwordConfirm}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className={styles.passwordConfirmError}>
                {touched.passwordConfirm && errors.passwordConfirm}
              </span>
            </div>
            <div className={styles.checboxContainer}>
              <input
                onChange={handleChange}
                id='checkbox'
                className={`${styles.checkbox} ${styles.darkCheckbox}`}
                type='checkbox'
                name='checkbox'
                value={values.checkbox}
              />
              <label htmlFor='checkbox' className={styles.contractConfirmText}>
                Sözleşmeyi kabul ediyorum
              </label>
              <span className={styles.checkboxError}>
                {touched.checkbox && errors.checkbox}
              </span>
            </div>

            <button
              type='submit'
              onClick={handleSubmit}
              className={`${styles.submitButton} ${
                isDark && styles.darkButton
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Yükleniyor...' : 'KAYIT OL'}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
