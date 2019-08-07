import React, { Component } from 'react'
import './Footer.css'
import payment from '../Images/payment.png'

class footer extends Component {
    render() {
        return (
            <footer>
                <div className="container-fuild col-xs-12 col-sm-12 col-md-12">
                    <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>INFORMATION</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="/"><i className="fa fa-angle-double-right"></i>Blog</a></li>
                                <li><a href="/"><i className="fa fa-angle-double-right"></i>About Us</a></li>
                                <li><a href="/"><i className="fa fa-angle-double-right"></i>Privacy </a></li>
                                <li><a href="/"><i className="fa fa-angle-double-right"></i>Orders & Shipping</a></li>
                                <li><a href="/"><i className="fa fa-angle-double-right"></i>Returns & Refunds</a></li>
                                <li><a href="/"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>HELPFUL LINKS</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="/"><i className="fa fa-angle-double-right"></i>Contact Us</a></li>
                                <li><a href="/"><i className="fa fa-angle-double-right"></i>Suggest a Gift</a></li>
                                <li><a href="/"><i className="fa fa-angle-double-right"></i>Become Our Vendor</a></li>
                                <li><a href="/"><i className="fa fa-angle-double-right"></i>Bulk Gifting</a></li>
                                <li><a href="/"><i className="fa fa-angle-double-right"></i>Coupon Partners</a></li>
                            </ul>
                        </div>                       
                    </div>
                    <div className="row footerImg">
                        <div className="col-xs-12 col-sm-4 col-md-4" id="paymentImg">                            
                             <img id="socialImage" src={payment} alt="Gift Card" />
                        </div>
                    </div>
                </div >
            </footer>
        )
    }
}
export default footer;