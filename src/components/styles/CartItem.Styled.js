import styled from 'styled-components';

export const Items = styled.div`
   display: flex;
   margin: 1rem;
   border-radius: 10px;
   padding: 1rem 1rem;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
   align-items:center;
   justify-content:center;
   width:400px;

     input {
        padding: 10px;
        margin: 0.4rem;
        width: 60px;
        border: 1px solid gray;
        border-radius: 10px;
        outline: none;
     }
     button {
         width: 50px;
         height: 50px;
         border: 1px solid var(--secondary-color);
         cursor: pointer;
         transition: all ease-in-out 0.7s;
         border:none;
         margin-top:1rem;
         border-radius:10px;
         color: ${({ theme }) => theme.error.color};
         background-color: ${({ theme }) => theme.error.background};
     }
`

export const Detail = styled.div`
   display: flex;
   padding: 1rem;
   flex-direction: column;
   justify-content: space-between;
   
`
export const Cantidad = styled.div`
     display:grid;
     aling-items:center;
`