import Layout from 'components/layout/Layout';
import useTheme from 'hooks/useTheme';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyles';
import theme from 'styles/theme';
import Home from './Home';
import Invoice from './Invoice';

const Root: React.FC = () => {
  const themeStyle = useAppSelector((state) => state.theme);
  useTheme();

  return (
    <ThemeProvider theme={theme[themeStyle]}>
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
  );
};

export default Root;
