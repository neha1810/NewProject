import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogActions';
import Button from '../../Atoms/Button'
import Input from '../../Atoms/Input'
import Label from '../../Atoms/Label'
import {registerInput} from '../../Redux/actions/registerAction'
import {registerSubmit} from '../../Redux/actions/registerAction'
import {closePopup} from '../../Redux/actions/registerAction'
import './register.scss'

const cookies = new Cookies();

class Register extends React.Component {




  handleClose = (event) => {
    this.props.dispatch(closePopup(event));
  }



  handleSubmit = event => {

 
    
    console.log("in here")


   
    const userAdded = this.props
    console.log("in handle submit" + userAdded)

    this.props.dispatch(registerSubmit(userAdded))

  }

  render() {
    if (cookies.get('name')) {
      return <Redirect to={{
        pathname: '/',
        state: {
          username: cookies.get('name'),
          role: cookies.get('role')
        }
      }}
      />
    }

    return (

      <div className="container-fluid" id="my-register">
         
        <div className="row" id="register">
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 ">
            <div className="mylogin">
              <div className="social-login-header">
                <h1 className="login-title col">Create New Account</h1>
              </div>
              <div className="social-login-container  ">
                <div className="social-login-email">
                  <Label for="name" className="login-label"> <span>Name</span></Label>

                  <Input name="name" value={this.props.name} className="input-text-login" onchange={event => this.props.dispatch(registerInput(event))}></Input>
                  <span className="error">{this.props.nameError}</span>

                </div>
                <div className="social-login-email">
                  <Label for="username" className="login-label"> <span>Email</span></Label>

                  <Input name="username" value={this.props.username} className="input-text-login" onchange={event => this.props.dispatch(registerInput(event))}></Input>
                  <span className="error">{this.props.usernameError}</span>

                </div>
              

                <div className="social-login-password">
                  <Label for="password" className="login-label"> <span>Password</span></Label>

                  <Input name="password" type="password" value={this.props.password} className="input-text-login" onchange={event => this.props.dispatch(registerInput(event))}></Input>
                  <span className="error">{this.props.passwordError}</span>

                </div>
                <div className="social-login-button">
                  <Button value="Create An Account" onClick={this.handleSubmit} className="  login-button" />
 
                  <Dialog
                    open={this.props.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >

                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Enter the Values Required First
                                     </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleClose} color="primary" value="Okay" />


                    </DialogActions>
                  </Dialog>
                </div>
                
              

              </div>
            
            </div>
          </div>
        </div>
      </div>
    )
  }
}
function mapStatetoProps(state) {
 
 const{name,username,password,nameError,usernameError, passwordError,open}= state.registerdata
  return {
 
    name,
    username,
    password,
    nameError,
    usernameError,
    passwordError,open
  
  
  }

}

export default connect(mapStatetoProps,null)(Register);