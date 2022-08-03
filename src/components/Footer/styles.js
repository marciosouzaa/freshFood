import styled from 'styled-components';

export const Container = styled.footer`
  height: 12.4rem;
  margin: 9.8rem auto 0;
  display: flex;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

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

export const Logo = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: 1.4rem;

  img{
    width: 3.5rem;
    height: 3.5rem;
  }
`
