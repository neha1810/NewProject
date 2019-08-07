import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../atoms/Button'
import Cookies from 'universal-cookie';

import { connect } from 'react-redux'
import { fetchProductData } from '../Redux/actions/index'
import '../sheets/NavTemp.scss' 

const cookies = new Cookies();

class Nav extends React.Component {

    clean = () => {
        cookies.remove('name', { path: '/' })
        cookies.remove('role', { path: '/' })
    }
    linkClicked = event => {


        this.props.addLink(event.target.name)
    }

    render() {

        return (


            <nav>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                           
                            <span className="myNav">  <Link to="/Cart">Cart</Link></span> 



                            <span className="myNav"> </span>


                             

                            <span className="myNav">      <Link to="/Login">login</Link></span> 
                            <span className="myNav"> </span>

                            <span className="myNav">      <Link to="/">home</Link></span> 
                            <span className="myNav"> </span>
                            <span className="myNav">       <Link to="/products" name="ecommerce" onClick={this.linkClicked}>ecommerce</Link></span> 

                            <span className="myNav"> </span>   
                           
                            <span className="myNav">     <Link to="/">   <Button value="Logout" onClick={this.clean} /></Link></span> 
                        </div>

                    </div>
                </div>
            </nav>







        );
    }
}
const mapDispatchToProps = dispatch => {
    return {


        addLink: event => dispatch(fetchProductData(event))


    }
}



export default connect(
    null,
    mapDispatchToProps
)(Nav);