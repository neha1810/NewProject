import React from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Label from '../atoms/Label'
import GoogleButton from 'react-google-button'
import { loginInput } from '../Redux/actions/index'
import { connect } from 'react-redux'
import '../sheets/Login.scss'

import { GoogleLogin } from 'react-google-login';
import { loginSubmit } from '../Redux/actions/index';
import { Redirect } from 'react-router-dom'
import { googleSubmit } from '../Redux/actions/index';
import Cookies from 'universal-cookie';
import { Valid } from '../Redux/actions/index'
import Dialog from '@material-ui/core/Dialog'
import DialogContentText from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';


const cookies = new Cookies();





class Login extends React.Component {
  state = {
    open: false,

}
  responseGoogleError = (response) => {
    console.log(response);


  }

  responseGoogle = (response) => {

    this.props.dispatch(googleSubmit(response))

  }


  handleSubmit = event => {
  
    this.props.dispatch(Valid());

let task=this.props.isvalid

    if (this.props.isvalid===true) {
      console.log("isvalid")

      this.props.usernameError = ""
      this.props.passwordError = ""
      console.log("setting")
      this.setState({
        open: true
    })
    }



  

    this.props.dispatch(loginSubmit())

 
    // const { history } = this.props;
    // if(this.props.isLoggedIn){
    // console.log("in here")
    // history.push("/");
    // }



  }
  handleClose = () => {

    this.setState({
        open: false
    })
}






  render() {



    // console.log("ypppeeeeee")
    // if (this.props.isLoggedIn === true){
    //   console.log("eee")
    //       return <Redirect to={{
    //         pathname: '/',
    //         state: { username: this.props.username }
    //       }}
    //       />
    //       }
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


    //     if (this.props.googleLog===true) {
    // console.log(this.props.google.profileObj.name)

    //       return <Redirect to={{
    //         pathname: '/',
    //         state: { username: this.props.google.profileObj.name }
    //       }}
    //       />


    //     }



    return (

      <div className="container-fluid">
        <div className="row">
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

                  <Input name="password" value={this.props.password} className="input-text-login" onchange={event => this.props.dispatch(loginInput(event))}></Input>
                  <span className="error">{this.props.passwordError}</span>

                </div>




                <div className="social-login-button">
                  <Button value="Login" onClick={this.handleSubmit} className="  login-button" />
                </div>
                <div className="link-signup">
                  <p>New? Join YoYo</p>
                  <Button value="SIGN UP" className="signup-button" />

                </div>

              </div>


              <div className="social-login-container-signup ">
                <div className="block-title">
                  or Sign In with
                    <hr></hr>
                </div>
                <div className="block-content">
                  {/* <div className="all-signups">
              <span className="img-google">
                        
                         </span>
                    <a href="" className="link-signup-a">
                    
                        GOOGLE
                    </a>
                    </div> */}

                  {/* <GoogleButton className="gButton" onClick={() => { console.log('Google button clicked') }}/> */}


                  <GoogleLogin
                    clientId="92351138234-k17er7cd0ofgdu3jrp9u1n30qp3sj2m7.apps.googleusercontent.com"
                    render={renderProps => (
                      <GoogleButton className="gButton" onClick={renderProps.onClick} disabled={renderProps.disabled} />
                    )}
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogleError}
                    cookiePolicy={'single_host_origin'}
                  />
                    <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           successfully logged in
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            okay
          </Button>
      
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
 
  state = state.logindata
  console.log(state)
  console.log(typeof(state.isValid))
  return {


    username: state.username,
    password: state.password,
    isLoggedIn: state.isLoggedIn,
    hasUser: state.hasUser,
    google: state.google,
    googleLog: state.googleLog,
    usernameError: state.usernameError,
    passwordError: state.passwordError,
    isvalid: state.isValid






  }
}


export default connect(mapStatetoProps,null)(Login);