import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogActions';
import Image from '../../Atoms/Image'
import Button from '../../Atoms/Button'
import Header from '../../Organisms/header/header'
import { Submitdetails } from '../../Redux/actions/addToCartAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { closePopup } from '../../Redux/actions/addToCartAction'
import { Carousel } from 'react-bootstrap'
import './detail.scss'


class Detail extends React.Component {
    addToCartClick = () => {
        this.props.dispatch(Submitdetails(this.props.detail))
    }
    handleClose = (event) => {
        this.props.dispatch(closePopup(event));
    }
    render() {
        return (

            <div className="parentDetail conatiner-fluid">
                <main id="maincontent" className="page-main-container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 pt-5">
                            <Header />
                        </div>

                    </div>
                    <div>
     
                            <div className="product-essential">
                                <div className="row">
                                    <div className="product media col-lg-6 col-md-6 col-sm-12 col-xs-12 corousal" >
                                        {/* <MDBContainer>
                                            <MDBCarousel
                                                activeItem={1}
                                                length={3}
                                                showControls={true}
                                                showIndicators={false}
                                                className="z-depth-1"
                                                slide
                                            >
                                                <MDBCarouselInner>
                                                    <MDBCarouselItem itemId="1">
                                                        <MDBView>
                                                            <Image
                                                                className={"d-block w-100"}
                                                                src={this.props.image}
                                                                alt={"First slide"}
                                                            />
                                                        </MDBView>
                                                    </MDBCarouselItem>
                                                    <MDBCarouselItem itemId="2">
                                                        <MDBView>
                                                            <Image
                                                                className={"d-block w-100"}
                                                                src={this.props.image}
                                                                alt={"Second slide"}
                                                            />
                                                        </MDBView>
                                                    </MDBCarouselItem>
                                                    <MDBCarouselItem itemId="3">
                                                        <MDBView>
                                                            <Image
                                                                className={"d-block w-100"}
                                                                src={this.props.image}

                                                                alt={"Third slide"}
                                                            />
                                                        </MDBView>
                                                    </MDBCarouselItem>
                                                </MDBCarouselInner>
                                            </MDBCarousel>
                                        </MDBContainer> */}


                                        {/* <div id="demo" class="carousel slide" data-ride="carousel">


                                            <ul class="carousel-indicators">
                                                <li data-target="#demo" data-slide-to="0" class="active"></li>
                                                <li data-target="#demo" data-slide-to="1"></li>
                                                <li data-target="#demo" data-slide-to="2"></li>
                                            </ul>


                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <Image
                                                        className={"d-block w-100"}
                                                        src={this.props.image}

                                                        alt={"Third slide"}
                                                    />
                                                </div>
                                                <div class="carousel-item">
                                                    <Image
                                                        className={"d-block w-100"}
                                                        src={this.props.image}

                                                        alt={"Third slide"}
                                                    />
                                                </div>
                                                <div class="carousel-item">
                                                    <Image
                                                        className={"d-block w-100"}
                                                        src={this.props.image}

                                                        alt={"Third slide"}
                                                    />
                                                </div>
                                            </div>

                                            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                                                <span class="carousel-control-prev-icon"></span>
                                            </a>
                                            <a class="carousel-control-next" href="#demo" data-slide="next">
                                                <span class="carousel-control-next-icon"></span>
                                            </a>

                                        </div>
                                    </div> */}



                                        <Carousel id="mycar">
                                            <Carousel.Item>
                                                <Image
                                                    className={"d-block w-100"}
                                                    src={this.props.image}
                                                    id="image-car3"
                                                    alt={"Third slide"}
                                                />
                                                <Carousel.Caption>
                                                
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Image
                                                    className={"d-block w-100 "}
                                                    id="image-car1"
                                                    src={this.props.image}

                                                    alt={"Third slide"}
                                                />

                                                <Carousel.Caption>
                                                    
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Image
                                                    className={"d-block w-100 image-car"}
                                                    id="image-car2"
                                                    src={this.props.image}

                                                    alt={"Third slide"}
                                                />

                                                <Carousel.Caption>
                                                 
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                    <div className="product-info-main col-lg-6 col-md-6 col-sm-12 col-xs-12 pro-info">
                                        <div className="product-information">
                                            {/* {this.props.products.map((products, index) => (  */}
                                            <div className="product-name">

                                                <h1 className="h1 mobile-product-name">{this.props.name}</h1>


                                                <div className="product-sku">#CM04GBGT0116</div>
                                                <div className="sku-divider"> &nbsp;|</div>
                                                <div className="product-review">
                                                    <div className="product-reviews-summary short">
                                                        <div className="reviews-actions">
                                                            <a className="action view" href="/">3&nbsp;<span>Reviews</span></a>
                                                            <span>&nbsp;|</span>
                                                        </div>
                                                        <span className="no-display">3</span>
                                                        <span className="no-display">5</span>
                                                        <span className="no-display">4.4</span>
                                                        <div className="rating-summary">
                                                            <span className="label"><span>Rating:</span></span>
                                                            <div className="rating-result">
                                                                <span><span className="rating-87">87%</span></span>
                                                            </div>
                                                            <div className="rating-divider">|</div>
                                                        </div>

                                                        <div className="reviews-links">
                                                            <a className="add-review" href="/"><span className="fa fa-pencil"></span><span>Add Review</span></a>
                                                        </div>
                                                        <div className="clear"></div>
                                                    </div>
                                                </div>
                                                <div className="clear"></div>
                                                <div className="product-info-price"><div className="product-info-stock-sku">

                                                </div><div className="price-box price-final_price">


                                                        <span className="price-container price-final_price tax">
                                                            <span><span className="price">₹{this.props.price}</span></span>
                                                        </span>

                                                    </div>

                                                </div>

                                                <div className="actions action primary tocart" >

                                                    <Button
                                                        type={"submit"}
                                                        value={"Add to Cart"}
                                                        className={"action primary tocart"}
                                                        id={"product-addtocart-button"}
                                                        action={this.handleFormSubmit} onClick={this.addToCartClick}>
                                                        <span>AddToCart</span>
                                                    </Button>

                                                    <Dialog
                                                        open={this.props.open}
                                                        onClose={this.handleClose}
                                                        aria-labelledby="alert-dialog-title"
                                                        aria-describedby="alert-dialog-description"
                                                    >

                                                        <DialogContent>
                                                            <DialogContentText id="alert-dialog-description">
                                                                Added to Cart Successfully
                                     </DialogContentText>
                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button onClick={this.handleClose} color="primary" value="Okay" />


                                                        </DialogActions>
                                                    </Dialog>


                                                    <Link to="/checkout">
                                                        <Button
                                                            type={"submit"}
                                                            value={"Buy Now"}
                                                            id={"buy-now"}
                                                            className={"action primary tobuy"}>
                                                        </Button></Link>
                                                </div>

                                            </div>
                                            {/* ))}  */}

                                            <div className="product-info-stock-sku col-lg-12 col-md-12 col-sm-12 col-xs-12 removeleftrightpad"><div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pull-left removeleftrightpad">
                                                <hr></hr>
                                                <div className="featurelist" >
                                                    <div className="featurelist-bullet">✓</div><div className="featurelist-text">Free Shipping</div>
                                                </div>
                                                <div className="featurelist">
                                                    <div className="featurelist-bullet">✓</div><div className="featurelist-text">Sameday Delivery &nbsp; </div>
                                                </div>
                                                <div className="featurelist">
                                                    <div className="featurelist-bullet">✓</div><div className="featurelist-text">Nextday Delivery </div>
                                                </div>

                                            </div>

                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pull-right removeleftrightpad">
                                                    <div className="deldays">Delivery 4 - 6 Working Days</div>
                                                    <div className="delivery_title" id="delivery_title"><p className="fa fa-truck"></p>&nbsp;Delivery Coverage &amp; Charges</div>
                                                    <div></div>




                                                </div>
                                                <div className="share-this-block">
                                                    <span className="label-share">Share This:</span>
                                                    <div className="whatsaap" id="st-1"><div className="st-btn st-first" data-network="whatsapp">
                                                        <a href="https://www.whatsapp.com">
                                                            <img href="https://www.facebook.com" src="https://platform-cdn.sharethis.com/img/whatsapp-white.svg" alt="a" /></a>

                                                    </div><div className="st-btn" data-network="facebook" >
                                                            <a href="https://www.facebook.com">
                                                                <img src="https://platform-cdn.sharethis.com/img/facebook-white.svg" alt="b" /></a>

                                                        </div><div className="st-btn" data-network="twitter">
                                                            <a href="https://www.twitter.com">
                                                                <img src="https://platform-cdn.sharethis.com/img/twitter-white.svg" alt="c" /></a>

                                                        </div><div className="st-btn st-last" data-network="email" >
                                                            <a href="https://www.email.com">
                                                                <img src="https://platform-cdn.sharethis.com/img/email-white.svg" alt="d" /></a>

                                                        </div></div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                        

                        </div>
                    </div>
                </main>
                <main className="pro_details_1">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="detailed-menu " role="tablist">
                                <div className="data item title active">
                                    <Link to="/detailspage">
                                        Key Features</Link>

                                </div>
                                <div className="data item title">
                                    <Link to="/Details">Details</Link>

                                </div>
                                <div className="data item title">
                                    <a className="data switch" data-toggle="switch" href="#additional_howto" id="tab-label-additional_howto-title">
                                        How To Personalise                              </a>
                                </div>
                                <div className="data item title" >
                                    <a className="data switch" data-toggle="switch" href="#additional_disclaimer" id="tab-label-additional_disclaimer-title">
                                        Disclaimer                              </a>
                                </div>
                                <div className="data item title"  >
                                    <a className="data switch" data-toggle="switch" href="#reviews" id="tab-label-reviews-title">
                                        Reviews                             </a>
                                </div>

                            </div>

                        </div>
                        {/* <div className="keyfeatures col-md-8">
                            <KeyFeatures ></KeyFeatures></div> */}
                    </div>
                </main>

            </div>


        )
    }
}

const mapStateToProps = state => {


const{image,price,name}=state.mydetail.dataDetail
    return {
        detail: state.mydetail.dataDetail,
        image,
        price,
        name,
        open: state.addToCart.open


    }
}

export default connect(
    mapStateToProps,
    null
)(Detail);
