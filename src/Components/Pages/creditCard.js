import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Payment from 'payment';
import './credit.scss'

class creditCard extends Component {
    constructor() {
        super();
        this.state = {
            name: 'xxxxx xxx',
            number: '0000000000000000',
            month: 'xx',
            day: 'xx',
            ccv: 'CCV'
        }
    }

    //Name of Card Owner
    nameChange(n) {
        this.setState({
            name: n.target.value
        });
    }
    //Card Number
    numberChange(c) {
        this.setState({
            number: c.target.value
        });
    }
    //Expiration
    monthChange(m) {
        this.setState({
            month: m.target.value
        });
    }
    dayChange(d) {
        this.setState({
            day: d.target.value
        });
    }
    //CCV 
    ccvChange(v) {
        this.setState({
            ccv: v.target.value
        });
    }
    render() {
        return (
            <div>
                <div className="col-xs-12 col-sm-8 col-md-8">
                    <div className="callout credit">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <h1 className="credit__bank">My Bank</h1>
                            </div>
                            <div className="col-xs-12 col-sm-8 col-md-8">
                                <img className="credit__mc" src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_master_card-512.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-8 col-md-8">
                            <div className="column">
                                <p className="credit__card-number">{this.state.number}</p>
                                <span className="credit__ccv">{this.state.ccv}</span>
                            </div>
                            <div className="col-xs-12 col-sm-8 col-md-8">
                                <label><h2>Card Holder</h2>
                                    <h4 className="credit__name">{this.state.name}</h4>
                                </label>
                            </div>
                            <div className="col-xs-12 col-sm-8 col-md-8">
                                <label>Expires
                                 <p className="credit__date">{this.state.month} / {this.state.day}</p>
                                </label>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-xs-12 col-sm-8 col-md-8">
                    <div className="callout margin-top50">
                        <h2>Fill In The Details</h2>
                        <div className="dataEntry" id="name">
                            <label>NAME: </label>
                            <input type="text" onChange={this.nameChange.bind(this)} />
                        </div>
                        <div className="dataEntry" id="number"> 
                            <label>NUMBER:  </label>
                            <input type="text" maxLength="16" onChange={this.numberChange.bind(this)} />
                        </div>
                        <div className="row dataEntry" id="expDate">
                            <label className="column">EXPIRATION DATE:  </label>

                            <input type="text" maxLength="2" onChange={this.monthChange.bind(this)} />
                            <input type="text" maxLength="2" onChange={this.dayChange.bind(this)} />

                        </div>

                        <div className="row small-4 column dataEntry" id="cvv">
                            <label>CCV: </label>
                            <input type="text" maxLength="3" onChange={this.ccvChange.bind(this)} />
                        </div>

                        <div className="dataEntry">
                            <button type="submit">Pay Now!</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default creditCard;