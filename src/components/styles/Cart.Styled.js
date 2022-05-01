import styled from 'styled-components';

export const CartDiv = styled.div`
margin: 2rem auto;
width: 1100px;
display: flex;
justify-content: space-between;
`
export const Item = styled.div`
flex: 0.7;
margin-right: 1rem;
`
export const Content = styled.div`
height: 400px;
width: 700px;
flex: 0.3;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 1rem;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
border-radius: 10px;
`
export const Price = styled.div`
  flex: 0.4;
  font-size: 1.2rem;
  font-weight: bold;
  p {
    color:grey;
  }
  
`
export const Button = styled.button`
  padding: 10px 17px;
  border-radius: 10px;
  background: ${({theme}) => theme.success.background};
  color: ${({theme}) => theme.success.color};
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`