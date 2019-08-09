import React from 'react'

class Label extends React.Component
{
    render(){
    return(
        <div>
        <label for={this.props.for} class={this.props.className}> {this.props.children}</label>
        </div>
        
    )
    }
}
export default Label