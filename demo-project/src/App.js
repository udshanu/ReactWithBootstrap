import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { NoMatch } from "./components/nomatch/nomatch";
import { Layout } from "./components/layout/layout";
import { NavigationBar } from './components/navigationbar/navigationbar';
import { Jumbotron } from './components/jumbotron/jumbotron';
import RegisterBox from './components/login/registerbox';
import { Provider } from 'react-redux';
import { store } from './actions/store';
import LoginBox from './components/login/loginbox';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

function App() {
  return (
    // <Provider store={store}>
    //   <React.Fragment>
    //   <NavigationBar />
    //   <Jumbotron />
    //   <Layout>
    //   <Router>
    //     <Switch>
    //       <Route exact path='/' component={Home} />
    //       <Route path='/about' component={About} />
    //       <Route path='/contact' component={Contact} />
    //       <Route path='/login' component={LoginBox} />
    //       <Route path='/registration' component={RegisterBox} />
    //       <Route component={NoMatch} />
    //     </Switch>
    //   </Router>
    //   </Layout>
    // </React.Fragment>
    // </Provider>

    <BrowserRouter>
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateProject} />
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
