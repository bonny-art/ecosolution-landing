import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 16px;

  padding: 36px 12px;

  background-color: ${({ theme }) => theme.colors.grayLight};
`;

export const FieldsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FieldBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  position: relative;

  .error-styled {
    position: absolute;
    bottom: -22px;
    right: 0;

    color: ${({ theme }) => theme.colors.error};
    font-size: 12px;
  }
`;

export const Input = styled(Field)`
  height: 31px;
  padding-bottom: 8px;

  border: none;
  background-color: transparent;

  border-bottom: 1px solid
    ${({ theme, error }) => (error ? theme.colors.error : theme.colors.green)};

  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    font-size: 18px;

    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const TextArea = styled(Field)`
  height: 147px;
  padding-bottom: 8px;

  border: none;
  background-color: transparent;

  border-bottom: 1px solid
    ${({ theme, error }) => (error ? theme.colors.error : theme.colors.green)};

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    font-size: 18px;

    color: ${({ theme }) => theme.colors.gray};
  }
`;
