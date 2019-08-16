
import React, { Component } from 'react';
import { connect } from 'react-redux'
import banner from '../../../Components/Images/orionbanner.jpg'
import NavBar from '../navbar/navBar'
import { Link } from 'react-router-dom'
import cart from '../../Images/cart.png';
import logo from '../../Images/logoyoyo.png'
import {loginDetails}  from '../../Redux/actions/loginAction'
import './Header.scss'

import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Header extends Component {
    clean = () => {
        cookies.remove('name', { path: '/' })
        cookies.remove('role', { path: '/' })
        this.props.dispatch(loginDetails(cookies.get('name'),cookies.get('role')))
    }
    render() {
       
        return (
            <div>
           
            



                <div>
                    <nav className="header col-xs-8 col-sm-6 col-md-12" id="head">
                        <h1 id="logo"><img src={logo} alt="logo" /></h1>
                        <Link to="/cart"><img src={cart} alt="cart" id="cart"/></Link>
                        <div className="search">
              

                            <Link to="/"  >Home</Link>           
                        </div>                      

                    </nav>

              
                    <NavBar message={this.props.message} role={this.props.role} log={this.props.log} balance={this.props.balance} create={this.props.create}/>
                    <img src={banner} alt="banner" id="mybanner"/>



                </div>

            </div>
        );
    }
}
export default connect(
    null,
    null
)(Header);