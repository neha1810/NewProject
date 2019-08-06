import React from 'react'
import Total from '../organisms/Total'
import Product from '../organisms/Product'
import { Link } from 'react-router-dom'
import '../sheets/ProductList.scss'
import { connect } from 'react-redux'
import { fetchCartData } from '../Redux/actions/index'
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
        console.log(this.state.total);
    }

    render() {

        var products = <div>Loading</div>
        var component = this
        console.log(this.props.cartlist)
        if (this.props.cartlist.length > 0) {
            console.log("in here")
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

                {products}
                <Total total={this.state.total} />
                <Link to="/checkout" >         <button className="btn btn-outline-primary" id="checkout">
                    PROCEED TO CHECKOUT
              </button></Link>
            </div>
        );
    }
}


const mapStateToProps = state => {
    state = state.mycart
    console.log("hey" + JSON.stringify(state))

    return {
        cartlist: state.cart


    }
}

const mapDispatchToProps = dispatch => {
    return {
        // dispatching actions returned by action creators
        cartDisplay: dispatch(fetchCartData()),



    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);