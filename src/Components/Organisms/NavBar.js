import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'



const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search
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
  render() {
    return (
      <nav className="navbar navbar-expand-lg ">
        {/* <a className="navbar-brand " href="/"></a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            
            <NavItem path="/" name="Ecommerce" />
            <NavItem path="/page2" name="Entertainment" />
            <NavItem path="/page3" name="Travel and hospitality"  />
            <NavItem path="/page3" name="Health and beauty"  />
            <NavItem path="/page3" name="Food and beverages"  />

            
          </ul>
         
        </div>
      </nav>
    )
  }
}

export default navBar;