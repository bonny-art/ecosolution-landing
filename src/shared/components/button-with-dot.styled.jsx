import styled from '@emotion/styled';

export const GetInTouch = styled.button`
  border-radius: 500px;
  height: 39px;
  width: ${({ width }) => width};

  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.green};

  color: ${({ theme }) => theme.colors.black};

  line-height: 19px;

  span {
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.black};
  }
`;
