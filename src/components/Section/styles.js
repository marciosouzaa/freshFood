import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 4rem;
  padding: 0 2rem;

  h2 {
    margin-bottom: 3rem;
    font-weight: 500;
    font-size: 3.2rem;
  }

  @media (max-width: 600px) {
    & {
      margin-top: 3rem;
      padding: 0 1rem;
    }
    h2 {
      margin-bottom: 2rem;
      font-size: 2.2rem;
    }
  }
`;