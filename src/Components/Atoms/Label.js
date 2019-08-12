import React from 'react'

class Label extends React.Component
{
    render(){
    return(
        
        <label for={this.props.for} class={this.props.className}> {this.props.children}</label>
       
        
    )
    }
}
export default Label