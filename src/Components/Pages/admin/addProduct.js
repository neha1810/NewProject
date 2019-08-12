import React from 'react'
import { connect } from 'react-redux'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogActions';
import { changeinput } from '../../Redux/actions/adminAction'
import { submit } from '../../Redux/actions/adminAction'
import { clear } from '../../Redux/actions/adminAction'
import { closePopupAdmin } from '../../Redux/actions/adminAction'
import Button from '../../Atoms/Button'
import Input from '../../Atoms/Input'
import Label from '../../Atoms/Label'
import Header from '../../Organisms/header/header'
import './adminAdd.scss'



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
            <section className="flexbox" >
                <div className="container-fluid">
                <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 pt-5">
                            <Header />
                        </div>
                        </div>
                    <div className="row" id="admin">
                        <div className="admin-div col-md-3 col-sm-3 col-xs-12 col-lg-3" >


                            <h1 id="add">Add the gift</h1>
                        </div>

                        <div className="admin-div col-md-6 col-sm-6 col-xs-12 col-lg-6 " >


                            <div className="adminA">
                                <Label for="id" className="admin-label" > <p className="text-admin">Gift Id</p></Label>

                                <Input name="id" value={this.props.id} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <p className="error">{this.props.giftidError}</p>

                            </div>
                            <div className="adminA">
                                <Label for="giftName" className="admin-label"> <p className="text-admin">Gift Name</p></Label>

                                <Input name="giftName" value={this.props.giftName} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <p className="error">{this.props.giftnameError}</p>

                            </div>
                            <div className="adminA" >
                                <Label for="giftPrice" className="admin-label"> <p className="text-admin">Gift Price</p></Label>

                                <Input name="giftPrice" value={this.props.giftPrice} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <p className="error">{this.props.giftpriceError}</p>

                            </div>
                            <div className="adminA">
                                <Label for="giftDiscount" className="admin-label"> <p className="text-admin">Gift Discount</p></Label>

                                <Input name="giftDiscount" value={this.props.giftDiscount} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <p className="error">{this.props.giftdiscountError}</p>

                            </div>
                            <div className="adminA" >
                                <Label for="giftVendor" className="admin-label"> <p className="text-admin">Gift Vendor</p></Label>

                                <Input name="giftVendor" value={this.props.giftVendor} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <p className="error">{this.props.giftvendorError}</p>

                            </div>
                            <div className="adminA">
                                <Label for="giftCategory" className="admin-label" > <p className="text-admin">Gift Category</p></Label>

                                <Input name="giftCategory" value={this.props.giftCategory} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <p className="error">{this.props.giftcategoryError}</p>

                            </div>
                            <Button className="admin-button" value="SUBMIT" onClick={this.handleSubmit} />
                            <Dialog
                            id="popup"
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
                                    <Button onClick={this.handleClose} color="primary" value="okay" id="popupButton"/>


                                </DialogActions>
                            </Dialog>
                            <div></div>
                            <Button className="admin-button" value="CLEAR" onClick={this.handleClear}  />

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
    const{id,giftName,giftPrice,giftVendor,giftDiscount,giftCategory,giftidError,giftnameError,giftpriceError,giftdiscountError,giftvendorError,giftcategoryError,open} = state.addData
  
    return {
        // id: state.id,
        // giftName: state.giftName,
        // giftPrice: state.giftPrice,
        // giftVendor: state.giftVendor,
        // giftDiscount: state.giftDiscount,
        // giftCategory: state.giftCategory,
        // giftidError: state.giftidError,
        // giftnameError: state.giftnameError,
        // giftpriceError: state.giftpriceError,
        // giftdiscountError: state.giftdiscountError,
        // giftvendorError: state.giftvendorError,
        // giftcategoryError: state.giftcategoryError,
        // open: state.open,

        id,
        giftName,
        giftPrice,
        giftVendor,
        giftDiscount,
        giftCategory,
        giftidError,
        giftnameError,
        giftpriceError,
        giftdiscountError,
        giftvendorError,
        giftcategoryError,
        open
    }
}
export default connect(mapStatetoProps)(AddProduct);