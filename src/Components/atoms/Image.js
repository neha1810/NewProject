import React from 'react'

class Image extends React.Component
{
    render(){
    return(
        <div>
        <img src={this.props.src} alt={this.props.alt} height={this.props.height} width={this.props.width}></img>
        </div>
        
    )
    }
}
export default Image