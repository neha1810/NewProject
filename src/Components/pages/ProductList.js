import React from 'react'
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCartData } from '../Redux/actions/cartAction'
import { postCartData } from '../Redux/actions/cartAction'
import Total from '../Organisms/Total'
import Product from '../Organisms/Product'
import Header from '../Organisms/Header'
import '../sheets/ProductList.scss'



const cookies = new Cookies();
class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,

        };
    }

    calculateTotal = (price) => {

        this.setState({
            total: this.state.total + Number(price)
        });

    }
    postCart = () => {
        console.log("post cart")
        console.log(this.props.cartlist)
        this.props.postCart(this.props.cartlist);
    }

    render() {
        var products = <div>Loading</div>
        var component = this

        if (this.props.cartlist.length > 0) {

            products = this.props.cartlist.map(product =>

                <Product
                    name={product.name}
                    price={product.price}
                    image={product.image}

                    handleTotal={component.calculateTotal}
                />
            );
        }
        return (
            <div class="container-fluid" id="mycart">
                 <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 pt-5">
                        <Header />
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 pt-5">
                    {products}
                <Total total={this.state.total} />
                <Link to="/checkout" >         <button className="btn btn-outline-primary" id="checkout" onClick={this.postCart}>
                    PROCEED TO CHECKOUT
              </button></Link>
                    </div>
                    </div>
              
            </div>
        );
    }
}


const mapStateToProps = state => {
    state = state.mycart
    return {
        cartlist: state.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // dispatching actions returned by action creators
        cartDisplay: dispatch(fetchCartData(cookies.get('name'))),
        postCart: event => dispatch(postCartData(event)),



    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);