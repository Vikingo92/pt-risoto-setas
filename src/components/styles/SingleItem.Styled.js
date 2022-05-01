import styled from 'styled-components'

export const DivDetail = styled.div`
  display: flex;
  width: 800px;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding:2rem 2rem;
  align-items:center;
    img{
        width: 300px;
        object-fit: contain;
        margin-right: 1rem;
        border-radius: 10px;
    }
`

export const Card = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--secondary-color);
`

export const Title = styled.p`
font-size: 1.2rem;
font-weight: bold;
`
export const Price = styled(Title)`
`
export const Description = styled.p`
  font-size: 1rem;
  color:grey;
  width:400px;
`
export const Button = styled.button`
  width: 45%;
  padding: 10px 17px;
  background: ${({theme}) => theme.success.background};
  color: ${({theme}) => theme.success.color};
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  outline: none;
`