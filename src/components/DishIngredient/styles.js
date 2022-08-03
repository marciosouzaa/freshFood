import styled from 'styled-components';

export const Container = styled.div`
  max-width: 12rem;
  height: 3.2rem;

  display: flex;
  align-items: center;
  padding: 0 1rem;

  background-color: ${({ isNew }) =>
    isNew ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ isNew }) => (isNew ? '1px dashed #FFF' : 'none')};
  border-radius: 0.8rem;

  input {
    width: 100%;

    color: ${({ theme }) => theme.COLORS.WHITE};

    background: none;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  button {
    border: none;
    background: none;
    display: flex;

    svg {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;