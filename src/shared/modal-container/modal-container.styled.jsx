import styled from '@emotion/styled';

export const Backdrop = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  backdrop-filter: blur(4px);
  background-color: ${({ theme }) => theme.colors.greenLight}3f;
  z-index: 3;
`;
