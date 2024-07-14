import React from 'react';

import { Formik } from 'formik';

import * as Styled from './contact-us-form.styled';

import { contactUsValidationSchema } from 'schemas/contact-us.schema';
import { Notify } from 'notiflix';
import { theme } from 'styles';
import { ButtonWithBorder } from 'shared/components/button-with-border/button-with-border.component';

export const ContactUsForm = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    Notify.info(
      'Your question has been successfully submitted. You will receive a response soon. Thank you!',
      {
        width: '300px',
        borderRadius: '0px',
        cssAnimationStyle: 'fade',
        info: {
          background: theme.colors.green,
          textColor: theme.colors.black,
          fontFamily: 'Fira Sans',
          fontSize: '16px',
          notiflixIconColor: theme.colors.black,
        },
      }
    );
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactUsValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Styled.FormContainer>
          <Styled.FieldsContainer>
            <Styled.FieldBox>
              <label htmlFor="name">* Full name:</label>
              <Styled.Input
                id="name"
                name="name"
                placeholder="John Rosie"
                error={touched.name && errors.name}
              />
              {touched.name && errors.name && (
                <div className="error-styled">{errors.name}</div>
              )}
            </Styled.FieldBox>

            <Styled.FieldBox>
              <label htmlFor="email">* E-mail:</label>
              <Styled.Input
                id="email"
                name="email"
                placeholder="johnrosie@gmail.com"
                error={touched.email && errors.email}
              />
              {touched.email && errors.email && (
                <div className="error-styled">{errors.email}</div>
              )}
            </Styled.FieldBox>

            <Styled.FieldBox>
              <label htmlFor="phone">* Phone:</label>
              <Styled.Input
                id="phone"
                name="phone"
                placeholder="380961234567"
                error={touched.phone && errors.phone}
              />
              {touched.phone && errors.phone && (
                <div className="error-styled">{errors.phone}</div>
              )}
            </Styled.FieldBox>

            <Styled.FieldBox>
              <label htmlFor="message">Message:</label>
              <Styled.TextArea
                id="message"
                name="message"
                placeholder="Your message"
                as="textarea"
              />
            </Styled.FieldBox>
          </Styled.FieldsContainer>

          <div>
            <ButtonWithBorder className="form">Send</ButtonWithBorder>
          </div>
        </Styled.FormContainer>
      )}
    </Formik>
  );
};
