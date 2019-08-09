import React from 'react'

import Cookies from 'universal-cookie';
import Header from '../Organisms/Header'
import { Link } from 'react-router-dom'

const cookies = new Cookies();
class Home extends React.Component {


    render() {
    


        let message;
        let role;
        if ((this.props.location.state && this.props.location.state.username&&this.props.location.state.role) === undefined) {


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
                 if(this.props.location.state.role==="admin")
                 role=this.props.location.state.role

            }

        
        }

        return (
            
         
            <div>
                   <Header/>
                home

                <p>{message}</p>
                <Link to="/AddProduct"><p>{role}</p></Link>    
            </div>
        )
    }
}
export default Home