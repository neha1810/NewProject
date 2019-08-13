
import React, {Component} from 'react';


import TextField from '@material-ui/core/TextField';
import NavBar from '../navbar/navBar'
import { connect } from 'react-redux'
import NavDropdown from '../header/NavDropdown'
import { Link } from 'react-router-dom'
import cart from '../../Images/cart.png';


import './Header.css'

import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Header extends Component {
    
  clean = () => {
    cookies.remove('name', { path: '/' })
    cookies.remove('role', { path: '/' })
}
  
    render() {
        console.log(this.props.message)
        return (
            <div>
                <div className="topDiv col-xs-8 col-sm-5 col-md-0">
                    <div className="signIn-header collapse navbar-collapse " id="navbarSupportedContent">
                    <NavDropdown name="Hello, SignIN" id="dropDown">
                        
                        <Link to="/register" name="register" onClick={this.linkRegisterClicked}  ><p className="myDrop">Create Account</p></Link>
                        <Link to="/Login"><span>{this.props.message}</span></Link>
                        <Link to="/AddProduct"><span>{this.props.role}</span></Link>
                        <Link to="/" onClick={this.clean}><span>{this.props.log}</span></Link>
                        <Link to="/addBalance" className="myNav" id="addBalance"><p>AddBalance!</p></Link> 
                        
                    </NavDropdown>
                
                    <Link to="/cart"><img src={cart} alt="cart" /></Link>

                      
                       
                      
                    </div>
                </div>
             

               
                    <div>
                        <nav className="header col-xs-8 col-sm-6 col-md-12">
                            <h1>Yoyo App</h1>
                            <div className="search">
                                <TextField type="text" placeholder="Search.." className="search" />
                                <Link to="/"  className="myNav">Home</Link>
                            </div>
                        
                        
           
                        </nav>
                        <br/>
                        <br/>
                        <br/>
                        <NavBar/>
                 
                       


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