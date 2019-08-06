import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './addBalance.css'
import creditCard from './creditCard'
import axios from 'axios';

class addBalance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: ''
        }
    }
    addAmount = (amt) => {
        var money = amt;
        console.log(money);
        this.setState({ amount: money })
    }
    handleChange = (e) => {
        const isCheckbox = e.target.type === "checkbox";
        this.setState({
            [e.target.name]: isCheckbox
                ? e.target.checked
                : e.target.value
        });
    };

    handleSubmitBalance = e => {
        e.preventDefault();

        const balance = {
            balance: this.state.amount
        }
        axios.post(`http://localhost:3000/employees`, { balance })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }



    render() {
        return (
            <div className="outer-div">
                <form  onSubmit={this.handleSubmitBalance}>
                    <div className="div">
                        <div className="addBalance-div">
                            <label>Add Balance: </label>
                            <input name="amount" type="text" onChange={this.handleChange} value={this.state.amount}></input>
                        </div>
                        <div className="amount-div">
                            <input name="selectAmount" className="a-button-input" type="submit" value="₹500" aria-labelledby="a-autoid-0-announce" onClick={e => this.addAmount("500")}></input>
                            <input name="selectAmount" className="a-button-input" type="submit" value="₹1000" aria-labelledby="a-autoid-0-announce" onClick={e => this.addAmount("1000")}></input>
                            <input name="selectAmount" className="a-button-input" type="submit" value="₹10000" aria-labelledby="a-autoid-0-announce" onClick={e => this.addAmount("10000")}></input>
                        </div>
                    </div>
                    <div className="div">
                        <Router>
                            <Link className="link" to="/creditCardDetails">Add Money!</Link>
                            <Route exact path="/creditCardDetails" component={creditCard} />
                        </Router>
                    </div>
                </form>
            </div>

        )
    }
}
export default addBalance;