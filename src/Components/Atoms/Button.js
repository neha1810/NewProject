import React from 'react'

class Button extends React.Component
{
    render(){
    return(
       
        <button name={this.props.name}  class={this.props.className} onClick={this.props.onClick}>{this.props.value}</button>
      
        
    )
    }
}
export default Button