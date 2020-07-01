import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { NoMatch } from "./components/nomatch/nomatch";
import { Layout } from "./components/layout/layout";
import { NavigationBar } from './components/navigationbar/navigationbar';
import { Jumbotron } from './components/jumbotron/jumbotron';
import { Main } from './components/login/main';
import { LoginBox } from './components/login/loginbox';
import RegisterBox from './components/login/registerbox';
import { Provider } from 'react-redux';
import { store } from './actions/store';

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
      <NavigationBar />
      <Jumbotron />
      {/* <Main/> */}
      <Layout>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={LoginBox} />
          <Route path='/registration' component={RegisterBox} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
    </Provider>
  );
}

export default App;
