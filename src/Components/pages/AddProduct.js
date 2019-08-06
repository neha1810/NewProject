import React from 'react'

import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Label from '../atoms/Label'


import { connect } from 'react-redux'

import { changeinput } from '../Redux/actions/index'
import { submit } from '../Redux/actions/index'
import {clear} from '../Redux/actions/index'
import {ValidAdmin} from '../Redux/actions/index'
import '../sheets/AdminAdd.scss'





class AddProduct extends React.Component {

   
    handleClear = () => {
       
     
        this.props.dispatch(clear())

    }
    handleChange = event => {
        console.log("in change")
        this.setState({ name: event.target.value });
    }
 

    //valid true false and axios post
    handleSubmit = event => {
        this.props.dispatch(ValidAdmin())
     
        if (this.props.isValidAdd) {
          
                this.props.giftnameError=""
                this.props.giftidError=""
                this.props.giftpriceError=""
                this.props.giftdiscountError=""
                this.props.giftcategoryError=""
                this.props.giftvendorError=""
            
        }
      
        event.preventDefault();
     
        const productAdded = this.props
      
        this.props.dispatch(submit(productAdded))
     
    
     

      
     
    }
    render() {
        return (
            <section className="flexbox">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-12 col-lg-3 my-auto">


                            <h1>Add the gift</h1>





                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 col-lg-6 pt-5" >

                            <div>
                                <Label for="id" > <span>GiftId</span></Label>

                                <Input name="id" value={this.props.id} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <span className="error">{this.props.giftidError}</span>

                            </div>
                            <div >
                                <Label for="giftName" > <span>GiftName</span></Label>

                                <Input name="giftName" value={this.props.giftName} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <span className="error">{this.props.giftnameError}</span>

                            </div>
                            <div >
                                <Label for="giftPrice" > <span>GiftPrice</span></Label>

                                <Input name="giftPrice" value={this.props.giftPrice} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <span className="error">{this.props.giftpriceError}</span>

                            </div>
                            <div >
                                <Label for="giftDiscount" > <span>GiftDiscount</span></Label>

                                <Input name="giftDiscount" value={this.props.giftDiscount} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <span className="error">{this.props.giftdiscountError}</span>

                            </div>
                            <div >
                                <Label for="giftVendor" > <span>GiftVendor</span></Label>

                                <Input name="giftVendor" value={this.props.giftVendor} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <span className="error">{this.props.giftvendorError}</span>

                            </div>
                            <div >
                                <Label for="giftCategory" > <span>GiftCategory</span></Label>

                                <Input name="giftCategory" value={this.props.giftCategory} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <span className="error">{this.props.giftcategoryError}</span>

                            </div>
                            <Button className="admin-button" value="SUBMIT" onClick={this.handleSubmit} />
                            <Button className="admin-button" value="CLEAR" onClick={this.handleClear} />

                        </div>
                        <div className="col-md-3 col-sm-3  col-xs-12 col-lg-3">

                        </div>
                    </div>
                </div>
            </section>








        )
    }

}


function mapStatetoProps(state) {
state=state.addData
console.log(state.id)

    return {

        id: state.id,
        giftName: state.giftName,
        giftPrice: state.giftPrice,
        giftVendor: state.giftVendor,
        giftDiscount: state.giftDiscount,
        giftCategory: state.giftCategory,
        giftidError:state.giftidError,
        giftnameError:state.giftnameError,
        giftpriceError:state.giftpriceError,
        giftdiscountError:state.giftdiscountError,
        giftvendorError:state.giftvendorError,
        giftcategoryError:state.giftcategoryError,
        isValidAdd:state.isValidAdd



    }
}


export default connect(mapStatetoProps)(AddProduct);