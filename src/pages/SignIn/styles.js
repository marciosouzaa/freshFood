import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 48px;
    margin-left: 1.5rem;
  }
  @media (min-width: 900px) {
    height: 100vh;
      display: flex;
      flex-direction: row; 
      justify-content: center;
      
      div:first-child{
        margin: 0;
        margin-right: calc(5rem + 15vw);
      }
      form{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
      }
  }

`

export const Form = styled.form`
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  width: 40rem;
  padding: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin-top: 14rem ;
  margin-bottom: 10rem;
  border-radius: 1.6rem;

  

  > h2 {
    font-size: 24px;
    margin-bottom: 3rem;
  }

  > p {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    
  }
  input{
    border: .1rem solid white;
    border-radius: .5rem;
    margin-bottom: 2rem;
  }
  button{
    margin-bottom: 3rem;
  }
  
`

export const Logo = styled.div`
  margin-top: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-size: cover;

  >img{
    width: 45px;
    height: 45px;
  }
 
`

// responsivo



