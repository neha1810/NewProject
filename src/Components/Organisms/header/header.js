
import React, { Component } from 'react';


import TextField from '@material-ui/core/TextField';
import NavBar from '../navbar/navBar'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import NavDropdown from '../header/NavDropdown'
import cart from '../../Images/cart.png';

import './Header.css'




class Header extends Component {

    render() {
        return (
            <div>
                <div className="topDiv col-xs-8 col-sm-5 col-md-0">
                    <div className="signIn-header collapse navbar-collapse " id="navbarSupportedContent">
                       

                        <NavDropdown name="Hello, SignIN" id="dropDown">

                            <Link to="/register" name="register" onClick={this.linkRegisterClicked} ><p>CreateAccount</p></Link>
                            <Link to="/Login"><span>SignIn</span></Link>
                            <Link to="/" onClick={this.clean}><span>LogOut</span></Link>
                            <Link to="/addBalance" className="myNav" id="addBalance"><p>AddBalance!</p></Link>
                        </NavDropdown>
                        <Link to="/cart"><img src={cart} alt="cart" /></Link>

                    </div>
                </div>
                <div>

                </div>



                <div>
                    <nav className="header col-xs-8 col-sm-6 col-md-12">
                        <h1>Yoyo App</h1>
                        <div className="search">
                            <TextField type="text" placeholder="Search.." className="search" />
                        </div>
                        <div className="search-option-div">
                        </div>


                    </nav>

                    <br />
                    <br/>
                    <NavBar />




                </div>

            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {






    }
}
export default connect(
    null,
    mapDispatchToProps
)(Header);