import React, { Component } from 'react'

import logo from '../Images/Gift-logo.gif'
import homePage from '../Pages/homePage'
import contact from '../Pages/Contact'
import './Header.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import cart from '../Images/cart.png'
import TextField from '@material-ui/core/TextField';

class NavDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
    }
    showDropdown(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
        return (
            <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false"
                    onClick={(e) => { this.showDropdown(e) }}>
                    {this.props.name}
                </a>
                <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
                    {this.props.children}
                </div>
            </li>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <div className="topDiv">
                    <div className="signIn-header collapse navbar-collapse col-xs-2 col-sm-2 col-md-2" id="navbarSupportedContent">
                        <NavDropdown name="Hello, SignIN" id="dropDown">
                            <a className="dropdown-item" href="/home">My Account</a>
                            <a className="dropdown-item" href="/">My Orders</a>
                            <a className="dropdown-item" href="/">Create Account</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">SignIN</a>
                        </NavDropdown>

                        <a href="/" className="cartImage col-xs-2 col-sm-2 col-md-2"><img src={cart} alt="cart" /></a>
                    </div>
                </div>


                <Router>
                    <div>
                        <nav className="header col-xs-8 col-sm-6 col-md-12">
                            <h1>Yoyo App</h1>
                            <div className="search">
                                <TextField type="text" placeholder="Search.." className="search" />
                            </div>
                            <div className="search-option-div">
                            </div>
                            <Link className="link" to="/homePage">Home</Link>
                            <Link className="link" to="/contact">Contact</Link>
                        </nav>
                        <Route default path="/homePage" component={homePage} />
                        <Route exact path="/contact" component={contact} />
                    </div>
                </Router>
            </div>
        );
    }
}
export default Header;