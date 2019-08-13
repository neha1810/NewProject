import React from 'react'

class Image extends React.Component
{
    render(){
    return(
      
        <img src={this.props.src} alt={this.props.alt} height={this.props.height} width={this.props.width} id={this.props.id}></img>
      
        
    )
    }
}
export default Image