import Layout from 'components/layout/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyles';
import theme from 'styles/theme';
import Home from './Home';
import Invoice from './Invoice';

const Root: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/invoice/:id" component={Invoice} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default Root;
