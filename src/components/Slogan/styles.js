import styled from 'styled-components'

export const Container = styled.section`
  
    width: 113rem;
    height: 26rem;
    margin: 15rem auto;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    align-items: center;

    .slogan{
      padding-right: 4rem;
    }
    h2 {
      color: ${({theme}) => theme.COLORS.BLUE};
      font-size: 4rem;
      font-weight: 400;
    }
    p{
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
    img{
      height: 40rem;
      width: 60rem;
      position: relative;
      top: -6.3rem;
      left: -5rem;

    }

  button {
    width: 207px;
    }
    
`