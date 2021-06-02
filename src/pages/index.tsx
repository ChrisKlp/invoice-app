import Layout from 'components/layout/Layout';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { store } from 'store/store';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyles';
import theme from 'styles/theme';
import Home from './Home';
import Invoice from './Invoice';

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/invoice/:id" component={Invoice} />
              <Redirect to="/" />
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default Root;
