import React, { Fragment } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
//import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
//import SignIn from './components/auth/SignIn';
// import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import Forbidden from './components/common/Forbidden';
import SideMenu from './components/SideMenu';
import { makeStyles, CssBaseline, createMuiTheme } from '@material-ui/core';
import Header from './components/Header';
import PageHeader from './components/PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { ThemeProvider } from '@material-ui/core/styles';
// import SignInSide from './components/SignInSide';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import Dashboard from './components/dashboardnew/Dashboard';
//import Dashboard from './components/views/Dashboard/Dashboard';

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#f4f5fd"
    }
  }
  
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width:'100%'
  }
})

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    {/* <Dashboard /> */}
    {/* <SignIn /> */}
    {/* <SignUp /> */}
    
    {/* <SideMenu /> */}
    {/* <div className={classes.appMain}> */}
      {/* <Header />
      <PageHeader title="Page Header" subTitle="Page Description" icon={<PeopleOutlineIcon fontSize="large" />} />
      <Navbar /> */}
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateProject} />
          <Route path='/forbidden' component={Forbidden} />
        </Switch>
    {/* </div> */}
    </BrowserRouter>
    <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
