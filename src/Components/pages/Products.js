import React from 'react'

import Input from '../atoms/Input'

import { connect } from 'react-redux'
import '../sheets/Products.scss'
import Card from '../atoms/Card'
import { fetchProductData } from '../Redux/actions/index'
import { sortBy } from '../Redux/actions/index'
import Button from '../atoms/Button'



class Products extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      arr: []
    };
  }
  sorting=()=>
  {
    this.props.sorting(this.props.data);

  }

  handlecheck = event => {
 
    this.flag = 0;
    for (let i = 0; i < this.state.arr.length; i++) {
    
      if (event.target.value === this.state.arr[i]) {
        this.flag = 1;
        var array = [...this.state.arr]; // make a separate copy of the array
        var index = array.indexOf(event.target.value)
        if (index !== -1) {
          console.log(" found")
          array.splice(index, 1);
          this.setState({ arr: array }, function () {
            this.props.addFilter(this.props.category,this.state.arr);
          });
        }
      }
    }
 
    if (this.flag === 0) {
  
      this.setState({
        arr: this.state.arr.concat(event.target.value)
      }, function () {
        this.props.addFilter(this.props.category,this.state.arr);
      })
     
    }

   

  }
  render() {


    if (this.props.data === undefined) {
     
      return null
    }
    else {


      return (


        <div className="container-fluid">
          <div className="row">

            <div className="col-md-3 col-sm-3 col-xs-12 col-lg-3 pt-5">

              <h2>Filter</h2>

           

              Amazon <Input type="checkbox" name="amazon" value="amazon" onchange={this.handlecheck} />
              Myntra <Input type="checkbox" name="Myntra" value="myntra" onchange={this.handlecheck} />
              Sort by price:
              <Button onClick={this.sorting} value="sort"></Button>
            </div>

            <div className="col-md-3 col-sm-3 col-xs-12 col-lg-3 pt-5">


              <Card name={this.props.data[0].name} src={this.props.data[0].image} description={this.props.data[0].description} price={this.props.data[0].price} />
              <Card name={this.props.data[3].name} src={this.props.data[3].image} description={this.props.data[3].description} price={this.props.data[3].price} />
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12 col-lg-3 pt-5">
              <Card name={this.props.data[1].name} src={this.props.data[1].image} description={this.props.data[1].description} price={this.props.data[1].price} />
              <Card name={this.props.data[4].name} src={this.props.data[4].image} description={this.props.data[4].description} price={this.props.data[4].price} />
            </div>

            <div className=" col-md-3 col-sm-3 col-xs-12 col-lg-3 pt-5">
              <Card name={this.props.data[2].name} src={this.props.data[2].image} description={this.props.data[2].description} price={this.props.data[2].price} />
              <Card name={this.props.data[5].name} src={this.props.data[5].image} description={this.props.data[5].description} price={this.props.data[5].price} />

            </div>
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


    
    addFilter:(category,arr) => dispatch(fetchProductData(category,arr)),
    sorting:event => dispatch(sortBy(event))


  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);