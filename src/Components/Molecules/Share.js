import React, { Component } from 'react';
import { FacebookShareButton, LinkedinShareButton, WhatsappShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, LinkedinIcon, WhatsappIcon, TwitterIcon } from 'react-share'
import './Share.css'

class share extends Component {
    render() {
        return (
            <div className="share">
                <FacebookShareButton windowWidth={600} windowHeight={600} url='https://www.facebook.com/sharer/sharer.php'>
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>

                <WhatsappShareButton windowWidth={600} windowHeight={600} url='https://web.whatsapp.com/send' >
                    <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>

                <LinkedinShareButton windowWidth={600} windowHeight={600} url='https://linkedin.com/shareArticle'>
                    <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>

                <TwitterShareButton windowWidth={600} windowHeight={600} url='https://twitter.com/share'>
                    <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
            </div>
        )
    }
}
export default share;

