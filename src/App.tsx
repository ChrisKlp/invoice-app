import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyles';
import theme from 'styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <p>hello</p>
    </ThemeProvider>
  );
};

export default App;
