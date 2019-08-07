import React, { Component } from 'react'
import banner from '../Images/banner.jpg'
import './homePage.css'
import axios from 'axios'
import NavBar from '../Organisms/NavBar'
import Share from '../Molecules/share'

class homePage extends Component {
    constructor() {
        super();
        this.state = {
            item: []
        }
    }

    componentDidMount() {
        axios.get(` http://localhost:3000/products`)
            .then(res => {
                const item = res.data;
                this.setState({ item });
            })
    }

    render() {
        return (
            <fieldset>
                <div className="banner ">
                    <img className="col-xs-12 col-sm-8 col-md-8" id="banner" src={banner} alt="HPD_Friendshipday_1" />
                </div>
                <NavBar/>
                <div>
                    {this.state.item.map(item =>
                        <div className="col-xs-12 col-sm-4 col-md-4 div" key={item.id}>
                            <div className="element-div" >
                                <img src={`../Images/${item.image}.jpg`} alt="Gift Card" />
                            </div>
                            <div className="details">
                                <h2>{item.name}</h2>
                                <h3>{item.description}</h3>
                                <h3 className="price"> {item.price}</h3>
                            </div>
                        </div>
                    )}
                </div>
                <Share/>
            </fieldset>
        )
    }
}
export default homePage;