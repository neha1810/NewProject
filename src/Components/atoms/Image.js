import React from 'react'

class Image extends React.Component
{
    render(){
    return(
      
        <img src={this.props.src} alt={this.props.alt} height={this.props.height} width={this.props.width}></img>
      
        
    )
    }
}
export default Image