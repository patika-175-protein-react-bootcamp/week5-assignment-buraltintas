import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  name: yup.string(),
  surname: yup.string(),
  email: yup
    .string()
    .email('Lütfen geçerli bir eposta adresi giriniz.')
    .required('E-posta alanı zorunludur.'),
  password: yup
    .string()
    .typeError('Her karakteri kullanamazsın. Sadece @/./+/-/_ kullanabilirsin')
    .min(8, 'Şifreniz 8 karakterden az olamaz.')
    .max(32, 'Şifreniz 32 karakterden fazla olamaz.')
    .required('Şifre alanı zorunludur.'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Şifreler uyuşmuyor.')
    .required('Şifre tekrar alanı zorunludur.'),
  username: yup
    .string()
    .min(3, 'Kullanıcı adı 3 karakterden az olamaz.')
    .max(32, 'Kullanıcı adı 18 karakterden fazla olamaz.')
    .required('Kullanıcı adı zorunludur.'),
  checkbox: yup.boolean().oneOf([true], 'Lütfen kabul ediniz.'),
});
