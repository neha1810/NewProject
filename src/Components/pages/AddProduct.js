import React from 'react'
import { connect } from 'react-redux'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogActions';
import { changeinput } from '../Redux/actions/index'
import { submit } from '../Redux/actions/index'
import { clear } from '../Redux/actions/index'
import Button from '../Atoms/Button'
import Input from '../Atoms/Input'
import Label from '../Atoms/Label'
import '../sheets/AdminAdd.scss'


class AddProduct extends React.Component {

    state = {
        name: '',
        giftidError: "",
        giftnameError: "",
        giftpriceError: "",
        giftdiscountError: "",
        giftvendorError: "",
        giftcategoryError: "",
        open: false,


    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    handleClear = () => {

        this.props.dispatch(clear())

    }
    handleChange = event => {
        console.log("in change")
        this.setState({ name: event.target.value });
    }
    //validation
    Valid = () => {
        console.log("hi")
        console.log("hello" + JSON.stringify(this.props))
        let giftnameError = "";
        let giftidError = "";

        let giftpriceError = "";
        let giftdiscountError = "";
        let giftvendorError = "";
        let giftcategoryError = "";

        console.log(this.props.giftName)
        if (!this.props.giftName) {
            giftnameError = "Name cannot be empty";
        }
        if (!this.props.id) {
            giftidError = "Id cannot be empty";
        }
        if (!this.props.giftPrice) {
            giftpriceError = "Price cannot be empty";
        }
        if (!this.props.giftDiscount) {
            giftdiscountError = "Discount cannot be empty";
        }
        if (!this.props.giftVendor) {
            giftvendorError = "Vendor cannot be empty";
        }
        if (!this.props.giftCategory) {
            giftcategoryError = "Category cannot be empty";
        }
        if (giftnameError || giftidError || giftpriceError || giftdiscountError || giftcategoryError || giftvendorError) {

            this.setState({ giftnameError, giftidError, giftpriceError, giftdiscountError, giftcategoryError, giftvendorError })
            return false;
        }
        return true;
    }

    //valid true false and axios post
    handleSubmit = event => {
        const isValid = this.Valid();
        console.log(isValid)
        if (isValid) {
            this.setState({
                giftnameError: "", giftidError: "", giftpriceError: "", giftdiscountError: "", giftcategoryError: "", giftvendorError: ""
            })

            const productAdded = this.props
            console.log("in handle submit" + productAdded)
            this.props.dispatch(submit(productAdded))
            this.setState({
                open: true
            })
        }

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
                                <span className="error">{this.state.giftidError}</span>

                            </div>
                            <div >
                                <Label for="giftName" > <span>Gift Name</span></Label>

                                <Input name="giftName" value={this.props.giftName} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <span className="error">{this.state.giftnameError}</span>

                            </div>
                            <div >
                                <Label for="giftPrice" > <span>Gift Price</span></Label>

                                <Input name="giftPrice" value={this.props.giftPrice} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <span className="error">{this.state.giftpriceError}</span>

                            </div>
                            <div >
                                <Label for="giftDiscount" > <span>Gift Discount</span></Label>

                                <Input name="giftDiscount" value={this.props.giftDiscount} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <span className="error">{this.state.giftdiscountError}</span>

                            </div>
                            <div >
                                <Label for="giftVendor" > <span>Gift Vendor</span></Label>

                                <Input name="giftVendor" value={this.props.giftVendor} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <span className="error">{this.state.giftvendorError}</span>

                            </div>
                            <div >
                                <Label for="giftCategory" > <span>Gift Category</span></Label>

                                <Input name="giftCategory" value={this.props.giftCategory} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <span className="error">{this.state.giftcategoryError}</span>

                            </div>
                            <Button className="admin-button" value="SUBMIT" onClick={this.handleSubmit} />
                            <Dialog
                                open={this.state.open}
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
    return {

        id: state.id,
        giftName: state.giftName,
        giftPrice: state.giftPrice,
        giftVendor: state.giftVendor,
        giftDiscount: state.giftDiscount,
        giftCategory: state.giftCategory,
    }
}
export default connect(mapStatetoProps)(AddProduct);