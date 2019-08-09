import React from 'react'
import { connect } from 'react-redux'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogActions';
import { changeinput } from '../Redux/actions/adminAction'
import { submit } from '../Redux/actions/adminAction'
import { clear } from '../Redux/actions/adminAction'
import { closePopupAdmin } from '../Redux/actions/adminAction'
import Button from '../Atoms/Button'
import Input from '../Atoms/Input'
import Label from '../Atoms/Label'
import '../sheets/AdminAdd.scss'



class AddProduct extends React.Component {


    handleClear = () => {

        this.props.dispatch(clear())

    }
    handleClose = (event) => {
        this.props.dispatch(closePopupAdmin(event));
    }

    //validation


    //valid true false and axios post
    handleSubmit = event => {



        const productAdded = this.props
        console.log("in handle submit" + productAdded)
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
                                <Label for="id" > <span>Gift Id</span></Label>

                                <Input name="id" value={this.props.id} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <span className="error">{this.props.giftidError}</span>

                            </div>
                            <div >
                                <Label for="giftName" > <span>Gift Name</span></Label>

                                <Input name="giftName" value={this.props.giftName} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <span className="error">{this.props.giftnameError}</span>

                            </div>
                            <div >
                                <Label for="giftPrice" > <span>Gift Price</span></Label>

                                <Input name="giftPrice" value={this.props.giftPrice} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <span className="error">{this.props.giftpriceError}</span>

                            </div>
                            <div >
                                <Label for="giftDiscount" > <span>Gift Discount</span></Label>

                                <Input name="giftDiscount" value={this.props.giftDiscount} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <span className="error">{this.props.giftdiscountError}</span>

                            </div>
                            <div >
                                <Label for="giftVendor" > <span>Gift Vendor</span></Label>

                                <Input name="giftVendor" value={this.props.giftVendor} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <span className="error">{this.props.giftvendorError}</span>

                            </div>
                            <div >
                                <Label for="giftCategory" > <span>Gift Category</span></Label>

                                <Input name="giftCategory" value={this.props.giftCategory} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <span className="error">{this.props.giftcategoryError}</span>

                            </div>
                            <Button className="admin-button" value="SUBMIT" onClick={this.handleSubmit} />
                            <Dialog
                                open={this.props.open}
                                onClose={this.handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >

                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Successfully Submitted the new product
                                     </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleClose} color="primary" value="okay" />


                                </DialogActions>
                            </Dialog>
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
    state = state.addData
    console.log(state.open)
    return {
        id: state.id,
        giftName: state.giftName,
        giftPrice: state.giftPrice,
        giftVendor: state.giftVendor,
        giftDiscount: state.giftDiscount,
        giftCategory: state.giftCategory,
        giftidError: state.giftidError,
        giftnameError: state.giftnameError,
        giftpriceError: state.giftpriceError,
        giftdiscountError: state.giftdiscountError,
        giftvendorError: state.giftvendorError,
        giftcategoryError: state.giftcategoryError,
        open: state.open
    }
}
export default connect(mapStatetoProps)(AddProduct);