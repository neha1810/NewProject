import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDetailsHome } from '../../Redux/actions/homeImageAction'
import Card from '../../Atoms/card/Card'
import './homeProducts.scss'

class HomeProducts extends Component {


    render() {
        if (this.props.data[0] === undefined)
            return null
        return (

            <React.Fragment>
                <div className="container">
                    <div className="row">

                    </div>
                    <div className="row">

                        <div className=" col-md-3 col-sm-6 col-xs-6 col-lg-3 pt-5" id="categories">
                            <Card productId={this.props.data[0].id} name={this.props.data[0].name} src={this.props.data[0].image} description={this.props.data[0].description} price={this.props.data[0].price} />
                            <Card productId={this.props.data[3].id} name={this.props.data[3].name} src={this.props.data[3].image} description={this.props.data[3].description} price={this.props.data[3].price} />

                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-6 col-lg-3 pt-5">
                            <Card productId={this.props.data[1].id} name={this.props.data[1].name} src={this.props.data[1].image} description={this.props.data[1].description} price={this.props.data[1].price} />
                            <Card productId={this.props.data[4].id} name={this.props.data[4].name} src={this.props.data[4].image} description={this.props.data[4].description} price={this.props.data[4].price} />
                        </div>

                        <div className=" col-md-3 col-sm-6 col-xs-6 col-lg-3 pt-5">
                            <Card productId={this.props.data[2].id} name={this.props.data[2].name} src={this.props.data[2].image} description={this.props.data[2].description} price={this.props.data[2].price} />
                            <Card productId={this.props.data[5].id} name={this.props.data[5].name} src={this.props.data[5].image} description={this.props.data[5].description} price={this.props.data[5].price} />
                        </div>
                        <div className=" col-md-3 col-sm-6 col-xs-6 col-lg-3 pt-5">
                            <Card productId={this.props.data[2].id} name={this.props.data[2].name} src={this.props.data[2].image} description={this.props.data[2].description} price={this.props.data[2].price} />
                            <Card productId={this.props.data[5].id} name={this.props.data[5].name} src={this.props.data[5].image} description={this.props.data[5].description} price={this.props.data[5].price} />
                        </div>

                    </div>
                </div>
            </React.Fragment>

        )
    }
}
const mapStateToProps = state => {
    console.log("my home")
    console.log(state.homePageReducer)
    return {
        data: state.homePageReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {

        PageData: dispatch(getDetailsHome()),



    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeProducts); 
