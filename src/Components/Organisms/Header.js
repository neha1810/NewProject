import React, { Component } from 'react'

import logo from '../Images/Gift-logo.gif'
import './Header.css'
import cart from '../Images/cart.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../pages/home'

// const NavItem = props => {
//     const pageURI = window.location.pathname + window.location.search
//     const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
//     const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
//     return (
//         <li className={liClassName}>
//             <a href={props.path} className={aClassName}>
//                 {props.name}
//                 {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
//             </a>
//         </li>
//     );
// }

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
            <li className="nav-item dropdown">
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

class top extends Component {

    render() {
        return (
            <header>
                {/* <div sticky="top" className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="Logo-div">
                        <a className="navbar-brand" href="/"><img className="col-xs-12 col-sm-12 col-md-12" src={logo} alt="Logo" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="Search-div">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>


                    <div className="cart-div">
                        <ul className="navbar-nav mr-auto">
                            <NavItem path="/page3" name="Cart" />
                        </ul>
        </div>*/}


                {/* </div> */}
                <div className="top-div">
                    <div className="signIn-header collapse navbar-collapse col-xs-2 col-sm-2 col-md-2" id="navbarSupportedContent">
                        <NavDropdown name="Hello, SignIN">
                            <a className="dropdown-item" href="/home">My Account</a>
                            <a className="dropdown-item" href="/">My Orders</a>
                            <a className="dropdown-item" href="/">Create Account</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">SignIN</a>
                        </NavDropdown>
                    </div>
                    <div className="cart col-xs-2 col-sm-2 col-md-2">
                        <a href="/" className="cartImage"><img src={cart} alt="cart" /></a>
                    </div>
                </div>

                <div className="header col-xs-12 col-sm-12 col-md-12">

                    <div className="col-xs-2 col-sm-2 col-md-2">
                        <a href="#default" className="logo"><img src={logo} alt="Logo" /></a>
                    </div>

                    <div className="search-option-div col-xs-8 col-sm-8 col-md-8">
                        <form className="form-inline search ">
                            <input className="form-control " type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>


                        <div className="header-right col-xs-8 col-sm-4 col-md-4 " >
                            <Router>
                                <Link className="active" id="options" to="/home">Home</Link>
                                <a href="#contact" id="options">Contact</a>
                                <a href="#about" id="options">About</a>
                                <Route exact path="/home" component={Home} />
                            </Router>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default top;

