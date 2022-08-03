import styled from 'styled-components';

export const Container = styled.div`
  textarea {
    width: 100%;
    height: 15rem;
    padding: 1rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};

    resize: none;

    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 0.5rem;
  }
`;