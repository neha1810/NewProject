import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProductData } from '../../Redux/actions/productAction'
import { historyDetails } from '../../Redux/actions/historyAction'
import Cookies from 'universal-cookie';
import NavDropdown from '../header/NavDropdown'
import { loginDetails } from '../../Redux/actions/loginAction'
import './NavBar.scss'

const cookies = new Cookies();




class navBar extends React.Component {
  clean = () => {
    cookies.remove('name', { path: '/' })
    cookies.remove('role', { path: '/' })
    this.props.loginDetails(cookies.get('name'), cookies.get('role'))
  }
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
            <Link to="/products" name="ecommerce" onClick={this.linkClicked} className="myNav" >Ecommerce</Link>
            <Link to="/entertainment" name="Entertainment" onClick={this.linkClicked} className="myNav" >Entertainment</Link>
            <Link to="/travel" name="Travel and hospitality" onClick={this.linkClicked} className="myNav" >Travel and hospitality</Link>
            <Link to="/Health" name="Health and beauty" onClick={this.linkClicked} className="myNav" >Health and beauty</Link>
            <Link to="/Food" name="Food and beverages" onClick={this.linkClicked} className="myNav" >Food and beverages</Link>


            <Link to="/History" name="history" onClick={this.linkHistoryClicked} className="myNav" >History</Link>


            <NavDropdown name="Hello, SignIN" id="dropDown"  >

              <Link to="/register" name="register" onClick={this.linkRegisterClicked}   ><p className="paraE">{this.props.create}</p></Link>
              <Link to="/Login"><p>{this.props.message}</p></Link>
              <Link to="/AddProduct"><p>{this.props.role}</p></Link>

              <Link to="/" onClick={this.clean}><p>{this.props.log}</p></Link>
              <Link to="/addBalance" id="addBalance"><p>{this.props.balance}</p></Link>
            </NavDropdown>



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
    loginDetails: event => dispatch(loginDetails(cookies.get('name'), cookies.get('role')))



  }
}
export default connect(
  null,
  mapDispatchToProps
)(navBar);

