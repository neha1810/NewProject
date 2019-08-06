import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../atoms/Button'
import Cookies from 'universal-cookie';
import { linkClick } from '../Redux/actions/index';
import { connect } from 'react-redux'
import { fetchProductData } from '../Redux/actions/index'

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
                            <ul>
                                <li><Link to="/Cart">Cart</Link></li>






                                <li>

                                    <Link to="/Login">login</Link>
                                </li>
                                <li>

                                    <Link to="/">home</Link>
                                </li>
                                <li>
                                    <Link to="/products" name="ecommerce" onClick={this.linkClicked}>ecommerce</Link>

                                </li>
                            </ul>
                            <Link to="/">   <Button value="Logout" onClick={this.clean} /></Link>
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