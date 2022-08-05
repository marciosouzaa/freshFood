import styled from 'styled-components';

export const Container = styled.footer`
  height: 12.4rem;
  margin: 9.8rem auto 0;
  display: flex;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  img{
    opacity: 0.5;
  }

  > div {
    max-width: 113rem;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 1rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 900px) {
      & {
        flex-direction: row;
      }
    }
  }
`;

