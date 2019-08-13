import React from 'react'
import Cookies from 'universal-cookie';
import Header from '../../Organisms/header/header'
import HomeProducts from '../../Organisms/homeImages/homeProducts'
import Footer from '../../Organisms/footer/footer'
import Share from '../../Molecules/share/share'



const cookies = new Cookies();
class Home extends React.Component {


    render() {



        let message;
        let role;
        let log;
        if ((this.props.location.state && this.props.location.state.username && this.props.location.state.role) === undefined) {
            console.log("hey")
            message ="SignIn";
            log=""
            role = cookies.get('role')
        }
        else {
            if (!cookies.get('name')) {
                console.log("hey1")
                message ="SignIn";
                log=""
                role = ""
            }
            else {
                console.log("hey2")
                message = this.props.location.state.username
                log="LogOut"
                if (this.props.location.state.role === "admin")
                    role = this.props.location.state.role

            }


        }
        console.log(message)

        return (


            <div>
                <Header message={message} role={role} log={log}/>
               
              
                <HomeProducts />
                <Share/>
      
                <Footer />
            </div>
        )
    }
}
export default Home