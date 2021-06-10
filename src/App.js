import './styles/App.css';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// PAGES
import Home from './Pages/Home';
import Tracker from './Pages/Trakker';

// components
import Nav from './components/Menu';





import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import VpnKey from '@material-ui/icons/VpnKey';
import Person from '@material-ui/icons/Person';
import Login from './Pages/Login';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));



function App() {
  const classes = useStyles();
  return (
    <div className="app">
    <Router>
      {/* <Nav/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/tracker" exact>
          <Tracker/>
        </Route>
      </Switch> */}
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Home', 'Trakker', 'Notification'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <VpnKey/> : <Person />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Login', 'Sign Up', 'Profile'].map((text, index) => (
            <ListItem button key={text}>
              <Person>{index % 2 === 0 ? <VpnKey /> : <Person />}</Person>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
      <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/trakker">
            <Tracker/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </main>
    </div>
      
    </Router>

    </div>
  );
}

export default App;
