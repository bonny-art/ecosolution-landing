import * as Yup from 'yup';

export const contactUsValidationSchema = Yup.object().shape({
  name: Yup.string().required('Wrong Fullname'),
  email: Yup.string().email('Wrong Email').required('Wrong Email'),
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Wrong Phone')
    .required('Wrong Phone'),
  message: Yup.string(),
});
