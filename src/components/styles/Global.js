import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');
:root {
    --primary-color: #622ae8;
    --secondary-color: #333333;
    --light-color: #eeeeee;
    --dark-color: #000000;
  }
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-size:1rem;
    }
    body {
        align-items:center;
        place-items:center;
        display:flex;
        font-family: 'Oxygen', sans-serif;
        background-color:white;
    }
    button {
        background-color: ${({theme}) => theme.colors.orange};
        color:white;
        border:none;
        cursor:pointer;
        &:hover {
            transform:scale(0.98);
        }
    }
    h3, h4 {
        color:black;
    }
    p{
        line-height: 1.3;
        // color:grey
    }
`

export const theme = {
    colors: {
        orange: '#35495e',
        red: '#db4a39',
        blue: '#3b5998',
        text: '#0E7184',
        link: '#1DA1F2',
        border:'#AAB8C2',
        shadow: ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        header:'#42b883',
    },
    success: {
        color:'#236969',
        background:'#74f6a7'
    },
    error: {
        color:'#77204b',
        background:'#ffaaa5'
    },
    search: {
        color:'#7c73e6',
        background:'#c4c1e0'
    }

}