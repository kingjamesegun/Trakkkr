import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// PAGES
import Home from './Pages/Home';
import Product from './Pages/Product';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

import Nav from './components/Nav'



function App() {
  return (
    <div className="">
    <Router>
      <Switch>
          <Route path="/register" exact>
            <SignUp/>
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
        <div className='container'>
        <Nav/>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/product">
            <Product/>
          </Route>
          
        </div>
        </Switch>
   
   
    </Router>

    </div>
  );
}

export default App;
