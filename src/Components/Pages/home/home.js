import React from 'react'
import Cookies from 'universal-cookie';
import {Route, Link } from 'react-router-dom'
import Header from '../../Organisms/header/header'
import HomeProducts from '../../Organisms/homeImages/homeProducts'
import Footer from '../../Organisms/footer/footer'
import Share from '../../Molecules/share/share'


const cookies = new Cookies();
class Home extends React.Component {


    render() {



        let message;
        let role;
        if ((this.props.location.state && this.props.location.state.username && this.props.location.state.role) === undefined) {


            message = cookies.get('name')
            role = cookies.get('role')
        }
        else {
            if (!cookies.get('name')) {

                message = "";
                role = ""
            }
            else {
                message = this.props.location.state.username
                if (this.props.location.state.role === "admin")
                    role = this.props.location.state.role

            }


        }

        return (


            <div>
                <Header />
                <p>{message}</p>
                <Link to="/AddProduct"><p>{role}</p></Link>
                <HomeProducts />
                <Share/>               
                <Footer />

            </div>
        )
    }
}
export default Home