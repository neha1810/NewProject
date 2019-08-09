import React from 'react'
import Button from './Button'
import { connect } from 'react-redux'
import { getDetails } from '../Redux/actions/productAction'
import { Link } from 'react-router-dom'

class Card extends React.Component {
  handleGoToDetails = () => {
    console.log(this.props.productId)
    this.props.handleGoToDetails(this.props.productId);

  }
  render() {
    return (
      <div className="card" >
        <div className="card-image">
          <img className="card-img-top" src={this.props.src} alt="Card cap" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.description}</p>
          <p>{this.props.price}</p>
          <Link to="/detail" >    <Button className="btn btn-primary" value="Go to Details" onClick={this.handleGoToDetails} /></Link>

        </div>
      </div>
    )

  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    handleGoToDetails: id => dispatch(getDetails(id)),



  }
}

export default connect(
  null,
  mapDispatchToProps
)(Card);
