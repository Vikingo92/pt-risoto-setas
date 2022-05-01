import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: ${({theme}) => theme.colors.header};
  padding: 1.2rem;
  // position: sticky;
  top: 0;
  left: 0;
  
  h2 {
    font-size: 40px;
    font-weight: bold;
    color: white;
  }
  
`

export const Counter = styled.div`
  display:flex;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: dark;
  background: var(--light-color);
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const DivCart = styled.div`
  display: flex;
  justify-content: space-between;
  margin-rigth: 1rem;
  background: #fff;
  border: none;
  border-radius: 15px;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
`