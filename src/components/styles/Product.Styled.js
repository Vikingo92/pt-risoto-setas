import styled from 'styled-components';

export const ProductDiv = styled.div`
    width: 300px;
    margin: 3rem 1rem;
    padding: 1rem 1rem;
    justify-content: space-between;
    aling-items:center;
    place-items:center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
    object-fit: cover;
    img {
        width: 250px;
        height:250px;
        object-fit: contain;
        border-radius: 10px;
    }
`

export const Details = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Title = styled.p`
font-size: 1rem;
font-weight: bold;
color: var(--secondary-color);
`

export const Description = styled.p`
    font-size:1rem;
    color:grey;
`
export const Price = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--secondary-color);
`

export const View = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;
    cursor: pointer;
    text-decoration: none;
    border-radius: 10px;
    color: ${({ theme }) => theme.search.color};
    background-color: ${({ theme }) => theme.search.background};
`
export const Add =  styled.button`
    width: 100px;
    padding: 1rem;
    color: ${({ theme }) => theme.success.color};
    background-color: ${({ theme }) => theme.success.background};
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
`

export const Options = styled.div`
    display:flex;
    justify-content:space-between;
`