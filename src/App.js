import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// PAGES
import Home from './Pages/Home';
// import Product from './Pages/Product';
// import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
// import Enquiry from './Pages/Enquiry';
// import Loader from './components/Loader'

import Nav from './components/Nav'


// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }


function App() {
  // const token = getToken();

  // if(!token){
  //   return <Login setToken={setToken}/>
  // }
  return (
    <div className="">
    <Router>
      <Nav/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
      
      <Switch>
        <Route path="/register" exact>
          <SignUp/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/login" exact>
          <Login/>
        </Route>
      </Switch>
      {/* <Switch> */}
        {/* <Route path="/product" exact>
          <Product/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/dashboard" exact>
          <Dashboard/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/enquiry" exact>
          <Enquiry/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/loader" exact>
          <Loader/>
        </Route>
      </Switch> */}
   
   
    </Router>

    </div>
  );
}

export default App;
