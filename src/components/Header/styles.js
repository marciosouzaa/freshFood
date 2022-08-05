import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    grid-area: header;
    display: flex;
  
    height: 10rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
    h1 {
        font-size: 2.5rem;
        white-space: nowrap;
        
    }
    
    .head{
        max-width: 1130px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
    }
        .toggleNav {
            button {
                background: none;
                border: none;
                margin-right: 3rem;
                color: white;
                svg{
                    width: 3rem;
                    height: 3rem;
                }
            }   
        }

        @media (min-width: 900px) {
            .toggleNav {
                display: none;
            }
        }
    
    .buttons{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        
    }
    a svg{
       width: 3rem;
       height: 3rem;
       text-decoration: none;
       color: ${({theme}) => theme.COLORS.WHITE};
       margin-left: 2rem;
    }
`;

export const Search = styled.div`
    width: 50%;
`;

export const Nav = styled.div`
  white-space: nowrap;
  position: absolute;
  top: 10rem;
  right: 0;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  padding: 2rem;
  border-radius: 0.5rem;
  
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  z-index: 1;
  
  > svg {
      cursor: pointer;
    }
    
    .buttonText {
        background: none;
        border: none;
        
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    
    @media (min-width: 900px) {
      width: 90rem;
      .buttons{
        flex-direction: row;
      }
    & {

      position: relative;
      top: 0;
      padding: 0;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: end;

      gap: 3rem;
    }
  }
`;

