import React from 'react'
import { connect } from 'react-redux'
import Card from '../Atoms/card/Card'
class Category extends React.Component {
  render() {
    if (this.props.data === undefined) {
      console.log("undefined coming")
      return null
    }
    else {
      return (
        <React.Fragment>
          <div className=" col-md-6 col-sm-6 col-xs-12 col-lg-3 pt-5" id="categories">
            <Card productId={this.props.data[0].id} name={this.props.data[0].name} src={this.props.data[0].image} description={this.props.data[0].description} price={this.props.data[0].price} />
            <Card productId={this.props.data[3].id} name={this.props.data[3].name} src={this.props.data[3].image} description={this.props.data[3].description} price={this.props.data[3].price} />
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 col-lg-3 pt-5">
            <Card productId={this.props.data[1].id} name={this.props.data[1].name} src={this.props.data[1].image} description={this.props.data[1].description} price={this.props.data[1].price} />
            <Card productId={this.props.data[4].id} name={this.props.data[4].name} src={this.props.data[4].image} description={this.props.data[4].description} price={this.props.data[4].price} />
          </div>

          <div className=" col-md-6 col-sm-6 col-xs-12 col-lg-3 pt-5">
            <Card productId={this.props.data[2].id} name={this.props.data[2].name} src={this.props.data[2].image} description={this.props.data[2].description} price={this.props.data[2].price} />
            <Card productId={this.props.data[5].id} name={this.props.data[5].name} src={this.props.data[5].image} description={this.props.data[5].description} price={this.props.data[5].price} />
          </div>
        </React.Fragment>
      )
    }
  }
}
const mapStateToProps = state => {
  console.log(state.data.dataList)

  return {

    data: state.data.dataList,
    category: state.data.category

  }
}
export default connect(
  mapStateToProps,
  null
)(Category);