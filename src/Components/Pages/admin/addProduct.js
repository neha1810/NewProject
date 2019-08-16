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
import './adminAdd.scss'



class AddProduct extends React.Component {


    handleClear = () => {

        this.props.dispatch(clear())

    }
    handleClose = (event) => {
        this.props.dispatch(closePopupAdmin(event));
    }

    //validation



    handleSubmit = event => {



        const productAdded = this.props
      
        this.props.dispatch(submit(productAdded))



    }
    render() {
        return (
            <section className="flexbox" >
                <div className="container-fluid">
                    {/* <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 pt-5">
                            <Header />
                        </div>
                        </div> */}
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
                                <Label for="gift" className="admin-label" > <p className="text-admin">Gift </p></Label>

                                <Input name="gift" value={this.props.gift} className="input-text-admin" onchange={event => this.props.dispatch(changeinput(event))}></Input>
                                <p className="error">{this.props.giftError}</p>

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
                                    <Button onClick={this.handleClose} color="primary" value="okay" id="popupButton" />


                                </DialogActions>
                            </Dialog>
                            <div></div>
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
    const { id, giftName, giftPrice, giftVendor, giftDiscount, gift, giftidError, giftnameError, giftpriceError, giftdiscountError, giftvendorError, giftError, open } = state.addData

    return {


        id,
        giftName,
        giftPrice,
        giftVendor,
        giftDiscount,
        gift,
        giftidError,
        giftnameError,
        giftpriceError,
        giftdiscountError,
        giftvendorError,
        giftError,
        open
    }
}
export default connect(mapStatetoProps)(AddProduct);