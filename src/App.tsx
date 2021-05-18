import Header from 'components/home/Header';
import InvoiceList from 'components/home/InvoiceList';
import Layout from 'components/layout/Layout';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyles';
import theme from 'styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Header />
        <InvoiceList />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
