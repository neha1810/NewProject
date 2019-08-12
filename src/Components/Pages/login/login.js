import React from 'react'
import GoogleButton from 'react-google-button'
import { connect } from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import { Redirect,Link } from 'react-router-dom'
import Cookies from 'universal-cookie';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogActions';
import Button from '../../Atoms/Button'
import Input from '../../Atoms/Input'
import Label from '../../Atoms/Label'
import {closePopup} from  '../../Redux/actions/loginAction'
import { loginInput } from '../../Redux/actions/loginAction'
import { loginSubmit } from '../../Redux/actions/loginAction';
import { googleSubmit } from '../../Redux/actions/loginAction';
import Header from '../../Organisms/header/header'
import './login.scss'

const cookies = new Cookies();

class Login extends React.Component {


  responseGoogleError = (response) => {
   
    //   if(typeof(response)==WE){}
    if (response)
    {

    }
     
  }

  handleClose = (event) => {
    this.props.dispatch(closePopup(event));
  }
  responseGoogle = (response) => {

    this.props.dispatch(googleSubmit(response))

  }


  handleSubmit = event => {

 
    
    


    event.preventDefault();

    this.props.dispatch(loginSubmit())

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

      <div className="container-fluid" id="my-login">
            <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 pt-5">
                            <Header />
                        </div>
                        </div>
        <div className="row" id="login">
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 ">
            <div className="mylogin">
              <div className="social-login-header">
                <h1 className="login-title col">Sign In</h1>
              </div>
              <div className="social-login-container  ">
                <div className="social-login-email">
                  <Label for="username" className="login-label"> <span>Email</span></Label>

                  <Input name="username" value={this.props.username} className="input-text-login" onchange={event => this.props.dispatch(loginInput(event))}></Input>
                  <span className="error">{this.props.usernameError}</span>

                </div>

                <div className="social-login-password">
                  <Label for="password" className="login-label"> <span>Password</span></Label>

                  <Input name="password" type="password" value={this.props.password} className="input-text-login" onchange={event => this.props.dispatch(loginInput(event))}></Input>
                  <span className="error">{this.props.passwordError}</span>

                </div>
                <div className="social-login-button">
                  <Button value="Login" onClick={this.handleSubmit} className="login-button" id="login-button"/>
                  <Dialog
                  id="popup"
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
                <div className="link-signup">
                  <p>New? Join YoYo</p>
                  <Link to="/register" name="register"  >     <Button value="SIGN UP" className="signup-button" /></Link>

                </div>

              </div>
              <div className="social-login-container-signup ">
                <div className="block-title">
                  or Sign In with
                    <hr></hr>
                </div>
                <div className="block-content">
                  <GoogleLogin
                  
                    clientId="92351138234-k17er7cd0ofgdu3jrp9u1n30qp3sj2m7.apps.googleusercontent.com"
                    render={renderProps => (
                      <GoogleButton className="gButton" id="gButton" onClick={renderProps.onClick} disabled={renderProps.disabled} />
                    )}
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogleError}
                    cookiePolicy={'single_host_origin'}
                  />
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
  const{username,password,isLoggedIn,hasUser,google,googleLog,usernameError,passwordError,open} = state.logindata
  console.log(state.pas)
  return {
    // username: state.username,
    // password: state.password,
    // isLoggedIn: state.isLoggedIn,
    // hasUser: state.hasUser,
    // google: state.google,
    // googleLog: state.googleLog,
    // usernameError:state.usernameError,
    // passwordError:state.passwordError,
    // open:state.open
    username,
    password,
    isLoggedIn,
    hasUser,
    google,
    googleLog,
    usernameError,
    passwordError,
    open
  
  }

}

export default connect(mapStatetoProps,null)(Login);