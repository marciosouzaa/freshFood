import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
    
    width: 100%; 
    
    section{
        display: flex;
        flex-direction: column;
        max-width: 113rem;
        width: 100%;
        margin: 0 auto;
    }
`;


export const Content = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 113rem;
    width: 100%;
    height: 26rem;
    margin: 10rem auto 2rem;
    grid-area: content;
    padding-right: 1rem;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    img{
        position: absolute;
        bottom: 0;
        left: -5rem;
        width: 55rem;
    }
    div{
        position: absolute;
        right: 3rem;
    }
    @media (max-width: 900px) {
        h1{
            font-size: 2rem;
        }
        p{
            font-size: 1rem;
        }
        img{
            width: 45rem;
        }
    }
    
`;




