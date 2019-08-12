import React, { Component } from 'react'
import banner from '../../../Components/Images/banner.jpg'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {posthomePageData} from '../../Redux/actions/homeProductsActions'
import './homeProducts.css'
import Button from '../../Atoms/Button'
import Category from '../displayCategory'

class HomeProducts extends Component {
   

    render() {
        return (
            <fieldset>
                <div className="banner ">
                    <img className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="banner" src={banner} alt="HPD_Friendshipday_1" />
                </div>
               
                <div>
                    {this.props.homePageReducer.map(item =>
                        <div className="col-xs-12 col-sm-4 col-md-4 div" key={item.id}>
                            <div className="element-div" >
                                <img src={`../Images/${item.image}.jpg`} alt="Gift Card" />
                            </div>
                            <div className="details">
                                <h2>{item.name}</h2>
                                <h3 className="price"> {item.price}</h3>
        
                                <Link to="/detail"><Button value="Go To Details"></Button></Link>
                            </div>
                        </div>
                    )}
                </div>
              
            </fieldset>
        )
    }
}
const mapStateToProps = state => {
    console.log("my home")
    console.log(state.homePageReducer)
    return {
        homePageReducer: state.homePageReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // dispatching actions returned by action creators
        posthomePageData: dispatch(posthomePageData())
     


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeProducts); 
