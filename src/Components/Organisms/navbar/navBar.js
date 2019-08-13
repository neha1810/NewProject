import React from 'react';

import './NavBar.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProductData } from '../../Redux/actions/productAction'
import { historyDetails } from '../../Redux/actions/historyAction'

import Cookies from 'universal-cookie';
import NavDropdown from '../header/NavDropdown'
import cart from '../../Images/cart.png';
const cookies = new Cookies();
// const NavItem = props => {
//   const pageURI = window.location.pathname + window.location.search
//   const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
//   const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
//   return (
//     <li className={liClassName}>
//       <a href={props.path} className={aClassName}>
//         {props.name}
//         {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
//       </a>
//     </li>
//   );
// }




class navBar extends React.Component {

  linkClicked = event => {


    this.props.addLink(event.target.name)
  }
  linkHistoryClicked = event => {


    this.props.historyLink(event.target.name)
  }


  render() {
    
    
    return (
      <nav className="navbar navbar-expand-lg " id="navBar">
        {/* <a className="navbar-brand " href="/"></a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            <Link to="/products" name="ecommerce" onClick={this.linkClicked}  className="myNav" >Ecommerce</Link>
            <Link to="/entertainment" name="Entertainment" onClick={this.linkClicked}  className="myNav" >Entertainment</Link>
            <Link to="/travel" name="Travel and hospitality" onClick={this.linkClicked}  className="myNav" >Travel and hospitality</Link>
            <Link to="/Health" name="Health and beauty" onClick={this.linkClicked}  className="myNav" >Health and beauty</Link>
            <Link to="/Food" name="Food and beverages" onClick={this.linkClicked}  className="myNav" >Food and beverages</Link>
            {/* <NavItem path="/" name="Ecommerce" />
            <NavItem path="/page2" name="Entertainment" />
            <NavItem path="/page3" name="Travel and hospitality"  />
            <NavItem path="/page3" name="Health and beauty"  />
            <NavItem path="/page3" name="Food and beverages"  /> */}

            <Link to="/History" name="history" onClick={this.linkHistoryClicked} className="myNav" >History</Link>
            <Link to="/"  className="myNav">Home</Link>
            
            
         
            {/* <Link to="/register" name="register" onClick={this.linkRegisterClicked} className="myNav" >Register</Link> */}
          </ul>

        </div>
      </nav>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {


    addLink: event => dispatch(fetchProductData(event)),
    historyLink: event => dispatch(historyDetails(event)),
    


  }
}
export default connect(
  null,
  mapDispatchToProps
)(navBar);

