import React from 'react'
import { connect } from 'react-redux'
import { fetchProductData } from '../../Redux/actions/productAction'
import { sortBy } from '../../Redux/actions/productAction'
import Button from '../../Atoms/Button'
import Input from '../../Atoms/Input'
import Category from '../../Organisms/displayCategory'
import Header from '../../Organisms/header/header'
import '../../Atoms/card/card.scss'
import './category.scss'

class CategoryHealth extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      arr: []
    };
  }
  sorting = () => {
    this.props.sorting(this.props.data);

  }

  handlecheck = event => {
    console.log("in handle check")
    console.log(event.target.value)
    this.flag = 0;
    for (let i = 0; i < this.state.arr.length; i++) {
      console.log("in for ")
      console.log(this.flag)
      if (event.target.value === this.state.arr[i]) {
        this.flag = 1;
        var array = [...this.state.arr]; // make a separate copy of the array
        var index = array.indexOf(event.target.value)
        if (index !== -1) {
          console.log(" found")
          array.splice(index, 1);
          this.setState({ arr: array }, function () {
            this.props.addFilter(this.props.category, this.state.arr);
          });
        }
      }
    }
    console.log(this.flag)
    if (this.flag === 0) {
      console.log("not found")
      this.setState({
        arr: this.state.arr.concat(event.target.value)
      }, function () {
        this.props.addFilter(this.props.category, this.state.arr);
      })

    }
  }
  render() {
    console.log("rendering")

    if (this.props.data === undefined) {
      console.log("undefined coming")
      return null
    }
    else {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 pt-5" id="head">
              <Header />
            </div>

          </div>
          <div className="row">

            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-3 pt-5" id="my-filter">

              <h2> <p className="prodFont">Filter</p></h2>
              <p className="prodFont">Lakme</p> <Input type="checkbox" className="vendor" name="Lakme" value="Lakme" onchange={this.handlecheck} />
              <p className="prodFont">VLCC</p><Input type="checkbox" className="vendor" name="VLCC" value="VLCC" onchange={this.handlecheck} />
              <div>
                <p className="prodFont">Sort by price:</p>
                <Button className="prodButton" onClick={this.sorting} value="Sort"></Button>
              </div>
            </div>


            <Category />



          </div>
        </div>
      )
    }
  }
}
const mapStateToProps = state => {
 

  return {

    data: state.data.dataList,
    category: state.data.category

  }
}
const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators  
    addFilter: (category, arr) => dispatch(fetchProductData(category, arr)),
    sorting: event => dispatch(sortBy(event))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryHealth);