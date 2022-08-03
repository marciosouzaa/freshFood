import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};

  height: 56px;
  border: 0;
  padding: 0 16px;
  
  border-radius: .5rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`