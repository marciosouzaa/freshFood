import styled from 'styled-components';

export const Container = styled.div`
  max-width: 30rem;
  width: 100%;
  height: 51.2rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0.65);

  font-family: 'Roboto', sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 4rem;

    > svg {
      cursor: pointer;
    }
  }

  > img {
    width: 17.6rem;
    height: 17.6rem;
  }

  > button {
    background: none;
    border: none;

    h3 {
      display: flex;
      align-items: center;
      gap: .5rem;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    @media (max-width: 920px) {
    h3{
      font-size: 1.8rem;
    }
  }
  }

  p {
    padding: 0 4rem;
    font-size: 1.4rem;
  }

  strong {
    font-size: 3.2rem;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.7rem;

    > span {
      font-size: 2rem;
      font-weight: 700;
    }
  }

  > svg {
    margin-right: 1.9rem;
    margin-left: auto;
  }
  @media (max-width: 900px) {
    h3{
      font-size: 1rem;
    }
  }
`;
