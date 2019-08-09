import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import Login from './Components/Pages/Login'

import Products from './Components/Pages/Products'

// import Home from './Components/Molecules/Home'
import HomePage from './Components/Pages/homeProducts'
import Checkout from './Components/Molecules/Checkout'
import Detail from './Components/Pages/Detail'
import Nav from './Components/Molecules/Nav'
import NavBar from './Components/Organisms/NavBar'
import AddProduct from './Components/Pages/AddProduct'
import ProductList from './Components/Pages/ProductList'
import Header from './Components/Organisms/Header'
import './App.css';
import Footer from './Components/Organisms/Footer'
// import AddProduct from './Components/Pages/AddProduct'
// import FrontPage from './Components/Pages/frontPage'
// import AddBalance from './Components/Pages/addBalance'
import './App.css';
import Cookies from 'universal-cookie';
import homePage from './Components/Pages/homeProducts';
import History from './Components/Pages/History'
import categoryEntertainment from './Components/Pages/categoryEntertainment';

const cookies = new Cookies();

class App extends React.Component {
  render() {
    return (

      <Router>
        <div className="App">
          {/* <AddProduct/> */}
         {/* <FrontPage/>
          <AddBalance/> */}
          <Header/>
          {/* <Nav /> */}
            {/* <NavBar/> */}
          {/* <homePage/>
         
          <Header/> */}
          <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/Login' component={Login}></Route>
            <Route exact path='/products' component={Products}></Route>
            <Route exact path='/cart' component={ProductList}></Route>
            <Route exact path='/detail' component={Detail}></Route>
            <Route exact path='/History' component={History}></Route>
            <Route exact path='/AddProduct' component={AddProduct}></Route>
            <Route exact path='/entertainment' component={categoryEntertainment}></Route>


            <Route exact path='/checkout' render={() => (cookies.get('name') ? (<Checkout />) : (<Redirect to='/Login' />))}></Route>

          </Switch>
          
        
        </div>
       </Router>
    );
  }
}

export default App
