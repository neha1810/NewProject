import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import Login from './Components/pages/Login'

import Products from './Components/pages/Products'

import Home from './Components/Molecules/Home'
import Checkout from './Components/Molecules/Checkout'

import Nav from './Components/Molecules/Nav'

import ProductList from './Components/pages/ProductList'
import Header from './Components/organisms/Header'
import './App.css';
import Footer from './Components/organisms/Footer'
// import AddProduct from './Components/pages/AddProduct'
// import FrontPage from './Components/pages/frontPage'
// import AddBalance from './Components/pages/addBalance'
import './App.css';
import Cookies from 'universal-cookie';

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
          <Nav />

          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/Login' component={Login}></Route>
            <Route exact path='/products' component={Products}></Route>
            <Route exact path='/cart' component={ProductList}></Route>


            <Route exact path='/checkout' render={() => (cookies.get('name') ? (<Checkout />) : (<Redirect to='/Login' />))}></Route>

          </Switch>
          
         <Footer/>
        </div>
       </Router>
    );
  }
}

export default App
