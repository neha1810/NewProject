import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProductData } from '../Redux/actions/productAction'
import { historyDetails } from '../Redux/actions/historyAction'


const NavItem = props => {
  const pageURI = window.location.pathname + window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </a>
    </li>
  );
}



class navBar extends React.Component {
  linkClicked = event => {


    this.props.addLink(event.target.name)
  }
  linkHistoryClicked = event => {


    this.props.historyLink(event.target.name)
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg ">
        {/* <a className="navbar-brand " href="/"></a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            <Link to="/products" name="ecommerce" onClick={this.linkClicked}  className="myNav" >Ecommerce</Link>
            <Link to="/entertainment" name="Entertainment" onClick={this.linkClicked}  className="myNav" >Entertainment</Link>
            {/* <NavItem path="/" name="Ecommerce" />
            <NavItem path="/page2" name="Entertainment" />
            <NavItem path="/page3" name="Travel and hospitality"  />
            <NavItem path="/page3" name="Health and beauty"  />
            <NavItem path="/page3" name="Food and beverages"  /> */}

            <Link to="/History" name="history" onClick={this.linkHistoryClicked} className="myNav" >History</Link>
          </ul>

        </div>
      </nav>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {


    addLink: event => dispatch(fetchProductData(event)),
    historyLink: event => dispatch(historyDetails(event))


  }
}
export default connect(
  null,
  mapDispatchToProps
)(navBar);

