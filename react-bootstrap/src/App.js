import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./component/home/home";
import { About } from "./component/about/about";
import { Contact } from "./component/contact/contact";
import { NoMatch } from "./component/nomatch/nomatch";
import { Layout } from "./component/layout/layout";

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
