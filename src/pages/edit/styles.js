import styled from 'styled-components';

export const Container = styled.div`
  max-width: 120rem;
  width: 100%;
  margin: 2.4rem auto 0;
  padding: 0 2rem;

  a {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    gap: 1.1rem;
  }
`;

export const Content = styled.div`
  h1 {
    margin: 3.2rem 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  .button-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 10rem;

    button {
      flex: 50%;
    }
    button:nth-child(2) {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const InputItem = styled.div`
  height: 4.8rem;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0 1rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 4.6rem;

  .flex {
    flex: 80%;
  }
`;
