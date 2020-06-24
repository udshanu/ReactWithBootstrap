import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { NoMatch } from "./components/nomatch/nomatch";
import { Layout } from "./components/layout/layout";

function App() {
  return (
    <React.Fragment>
      <Layout>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
