import React, { Component } from 'react'
import banner from '../Images/banner.jpg'
class contact extends Component {
    render() {
        return (
            <fieldset>
                <div>
                    <div className="banner ">
                        <img className="col-xs-12 col-sm-8 col-md-8" id="banner" src={banner} alt="HPD_Friendshipday_1" />
                    </div>
                    <h1>Contact Details!</h1>

                </div>
            </fieldset>
        )
    }
}
export default contact;