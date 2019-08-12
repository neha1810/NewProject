
import React, {Component} from 'react';


import TextField from '@material-ui/core/TextField';
import NavBar from '../navbar/navBar'
import { connect } from 'react-redux'



import './Header.css'




class Header extends Component {
  
    render() {
        return (
            <div>
                <div className="topDiv col-xs-8 col-sm-5 col-md-0">
                    <div className="signIn-header collapse navbar-collapse " id="navbarSupportedContent">
                      
                
           

                      
                       
                      
                    </div>
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