import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Components/Pages/login/login'
import Products from './Components/Pages/categories/categoryEcommerce'
import Home from './Components/Pages/home/home'
import Checkout from './Components/Pages/checkout/checkout'
import Detail from './Components/Pages/detail/detail'
import AddProduct from './Components/Pages/admin/addProduct'
import ProductList from './Components/Pages/cart/cartList'
import Cookies from 'universal-cookie';
import Register from './Components/Pages/register/register'
import History from './Components/Pages/history/history'
import CategoryEntertainment from './Components/Pages/categories/categoryEntertainment';
import history from './Components/Organisms/history'
import CategoryTravel from './Components/Pages/categories/categoryTravel'
import CategoryHealth from './Components/Pages/categories/categoryHealth'
import CategoryFood from './Components/Pages/categories/categoryFood'
import AddBalance from './Components/Pages/addBalance/addBalance'
import Header from './Components/Organisms/header/header'

import './App.css';

const cookies = new Cookies();

class App extends React.Component {
  render() {

    return (

      <Router history={history}>
        <div className="App">
          <Header message={this.props.user} role={this.props.roleof} log={this.props.log} balance={this.props.balance} create={this.props.create} />
          <Switch>
            <Route exact path='/' component={Home}></Route>

            <Route path='/Login' component={Login}></Route>
            <Route path='/products' component={Products}></Route>
            <Route path='/cart' component={ProductList}></Route>
            <Route path='/detail' component={Detail}></Route>
            <Route path='/History' component={History}></Route>
            <Route path='/AddProduct' component={AddProduct}></Route>
            <Route path='/register' render={() => (!(cookies.get('name')) ? (<Register />) : (<Redirect to='/' />))}></Route>
            <Route path='/entertainment' component={CategoryEntertainment}></Route>
            <Route path='/travel' component={CategoryTravel}></Route>
            <Route path='/Health' component={CategoryHealth}></Route>
            <Route path='/Food' component={CategoryFood}></Route>
            <Route path="/addBalance" component={AddBalance}></Route>
            <Route path='/checkout' render={() => (cookies.get('name') ? (<Checkout />) : (<Redirect to='/Login' />))}></Route>

          </Switch>


        </div>
      </Router>
    );
  }
}

function mapStatetoProps(state) {
  const { user, roleof, log, balance, create } = state.logindata

  return {

    user,
    roleof,
    log,
    balance,
    create


  }

}

export default connect(mapStatetoProps, null)(App);
