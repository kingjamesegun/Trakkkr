import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// PAGES
import Product from './Pages/Product';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

import Nav from './components/Nav'
import ProductDetails from './Pages/ProductDetails';



function App() {
  return (
    <div className="">
    <Router>
      <Switch>
          <Route path="/" exact>
            <Login/>
          </Route>
          <Route path="/register" exact>
            <SignUp/>
          </Route>
        <div>
        <Nav/>
          <Route path="/product">
            <Product/>
          </Route>
          <Route path="/products/:id">
            <ProductDetails/>
          </Route>
          
        </div>
        </Switch>
   
   
    </Router>

    </div>
  );
}

export default App;
