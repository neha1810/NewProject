import React, { Component } from 'react'
import gift from '../Images/giftcard.png'
import amazonGift from '../Images/amazon-gift.jpg'
import '../Molecules/HomePage.css'

class homePage extends Component {
    render() {
        return (
            <div>
                <h1>Products</h1>
                <content>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 col-md-4" >
                                <div className="element-div">
                                    <a href="/" className="card-link"> <img src={gift} alt="Gift Card" /></a>
                                </div>
                                <div className="details">
                                    <h2>Gift-Card</h2>
                                    <h3 className="price"> $99</h3>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <div className="element-div">
                                    <a href="/" className="card-link"> <img src={gift} alt="Gift Card" /></a>
                                </div>
                                <div className="details">
                                    <h2>Gift-Card</h2>
                                    <h3 className="price"> $999</h3>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <div className="element-div">
                                    <a href="/" className="card-link"><img src={amazonGift} alt="Gift Card" /></a>

                                </div>
                                <div className="details">
                                    <h2>Gift-Card</h2>
                                    <h3 className="price"> $500</h3>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-4 col-md-4" >
                                <div className="element-div">
                                    <a href="/" className="card-link"> <img src={gift} alt="Gift Card" /></a>
                                </div>
                                <div className="details">
                                    <h2>Gift-Card</h2>
                                    <h3 className="price"> $99</h3>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <div className="element-div">
                                    <a href="/" className="card-link"> <img src={gift} alt="Gift Card" /></a>
                                </div>
                                <div className="details">
                                    <h2>Gift-Card</h2>
                                    <h3 className="price"> $999</h3>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <div className="element-div">
                                    <a href="/" className="card-link"><img src={amazonGift} alt="Gift Card" /></a>
                                </div>
                                <div className="details">
                                    <h2>Gift-Card</h2>
                                    <h3 className="price"> $500</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 col-md-4" >
                                <div className="element-div">
                                    <a href="/" className="card-link"> <img src={gift} alt="Gift Card" /></a>
                                </div>
                                <div className="details">
                                    <h2>Gift-Card</h2>
                                    <h3 className="price"> $99</h3>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <div className="element-div">
                                    <a href="/" className="card-link"> <img src={gift} alt="Gift Card" /></a>
                                </div>
                                <div className="details">
                                    <h2>Gift-Card</h2>
                                    <h3 className="price"> $999</h3>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <div className="element-div">
                                    <a href="/" className="card-link"><img src={amazonGift} alt="Gift Card" /></a>
                                </div>
                                <div className="details">
                                    <h2>Gift-Card</h2>
                                    <h3 className="price"> $500</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </content>
            </div>
        )
    }
}
export default homePage;