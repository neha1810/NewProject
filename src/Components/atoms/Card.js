import React from 'react'

class Card extends React.Component
{
    render()
    {
        return(
            <div className="card" >
            <div className="card-image">
            <img className="card-img-top" src={this.props.src} alt="Card cap" />
            </div>
            <div className="card-body">
              <h5 className="card-title">{this.props.name}</h5>
              <p className="card-text">{this.props.description}</p>
              <p>{this.props.price}</p>
              <a href="//" class="btn btn-primary" >Go to Details</a>
            </div>
          </div>
        )

    }
}
export default Card