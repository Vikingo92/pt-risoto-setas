import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from './routers/Routers';
import { GlobalStyles, theme } from './components/styles/Global'
import { ThemeProvider } from 'styled-components'
import { StyledContainer } from './components/styles/Container.Styled'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routers />
        <StyledContainer>

        </StyledContainer>
      </ThemeProvider>

    </div>
  );
}

export default App;
