import React from 'react'

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };



  }

  plus = () => {

    this.setState({
      quantity: this.state.quantity + 1
    });
    this.props.handleTotal(this.props.price);
  }

  minus = () => {
    this.setState({
      quantity: this.state.quantity - 1
    });
    this.props.handleTotal(-this.props.price);
  }



  render() {
    return (
      <div>
        <div className="row form-group">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <h4>{this.props.name}</h4>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">

            <img className="img-top" src={this.props.image} alt="cap" />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 ">Quantity: {this.state.quantity}</div>
        </div>
        <div className="row btn-toolbar">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            ₹{this.props.price}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
            <button className="btn btn-outline-primary" onClick={this.plus}>
              +
              </button>
            <button className="btn btn-outline-primary" onClick={this.minus} disabled={this.state.quantity < 1}>
              -
              </button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Product