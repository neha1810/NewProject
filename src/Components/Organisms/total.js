import React from 'react'


class Total extends React.Component {

  render() {

    let total = this.props.total;

    let subTotal = (+total);

    return (
      <div id="total-div">
        <h3 className="row" >
          <span className="col-xs-12 col-sm-6 col-md-6 col-lg-6">Total price:</span>
          <span className="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">₹{total}</span>
        </h3>

        <h3 className="row" id="subtotal-div">
          <span className="col-xs-12 col-sm-6 col-md-6 col-lg-6">Subtotal:</span>
          <span className="col-xs-12 col-sm-6 col-md-6 col-lg-6">₹{subTotal}</span>
        </h3>

      </div>
    );
  }
}

export default Total