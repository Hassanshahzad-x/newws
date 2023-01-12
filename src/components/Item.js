import React, { Component } from 'react'

export class Item extends Component {
   render() {
      let { title, description, url, newsurl } = this.props
      return (
         <div className="card" style={{ width: "18rem" }}>
            <img src={url} className="card-img-top" alt="..." />
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <p className="card-text">{description}</p>
               <a href={newsurl} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark">View full news</a>
            </div>
         </div>
      )
   }
}

export default Item
