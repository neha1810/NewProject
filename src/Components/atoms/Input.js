import React from 'react'

class Input extends React.Component
{
    render(){
    return(
        <div>
        <input name={this.props.name} type={this.props.type} class={this.props.className} onChange={this.props.onchange} onClick={this.props.onclick} value={this.props.value} checked={this.props.checked}/>
        </div>
        
    )
    }
}
export default Input