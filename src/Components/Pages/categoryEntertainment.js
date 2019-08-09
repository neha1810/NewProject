import React from 'react'
import { connect } from 'react-redux'
import { fetchProductData } from '../Redux/actions/productAction'
import { sortBy } from '../Redux/actions/productAction'
import Button from '../Atoms/Button'
import Input from '../Atoms/Input'
import Category from '../Organisms/displayCategory'
import '../sheets/Products.scss'
import Header from '../Organisms/Header'

class categoryEntertainment extends React.Component {

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
           <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 pt-5">
<Header/>
             </div>

           </div>
          <div className="row">

            <div className="col-md-3 col-sm-3 col-xs-12 col-lg-3 pt-5">

              <h2> <span className="prodFont">Filter</span></h2>
              <span className="prodFont">BookmyShow</span> <Input type="checkbox" name="BookmyShow" value="BookmyShow" onchange={this.handlecheck} />
              <span className="prodFont">Saavn</span> <Input type="checkbox" name="Saavn" value="Saavn" onchange={this.handlecheck} />
              <div>
              <span className="prodFont">Sort by price:</span>
              <Button className="prodButton" onClick={this.sorting} value="Sort"></Button>
              </div>
            </div>

          
<Category/>
    

           
          </div>
        </div>
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
)(categoryEntertainment);