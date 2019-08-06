import React from 'react'

import Cookies from 'universal-cookie';

const cookies = new Cookies();
class Home extends React.Component {


    render() {
        console.log("coming")


        let message;
        let role;
        if ((this.props.location.state && this.props.location.state.username&&this.props.location.state.role) === undefined) {


            message = cookies.get('name')
            role = cookies.get('role')
        }
        else {
            if (!cookies.get('name')) {
                console.log("yup")
                message = "";
                role = ""
            }
            else {
                message = this.props.location.state.username
                role = this.props.location.state.role
            }

            //    console.log(cookies.get('name'));
        }

        return (
            <div>home

                <p>{message}</p>
                <p>{role}</p>
            </div>
        )
    }
}
export default Home