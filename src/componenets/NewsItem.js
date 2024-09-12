import React, { Component } from 'react';
import Image from '../assets/noImageToPreview.jpg';

export class NewsItem extends Component { 

  constructor() {
    super();
    console.log("I am constructor from news ");
    this.state = {
      loader : true,
    }
  }
  render() {
    let {title, description, imageUrl, author, newsUrl, date, source} = this.props
    return (
      <div className='my-3'>
        <div className="card " style={{}}>
          <div style={{display : "flex", justifyContent : "flex-end", position : "absolute", right : "0"}}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          {/* {this.state.loader === true? <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span></div> : "Hello, world"} */}
          <img className="card-img-top" src={imageUrl == null ? Image : imageUrl}  alt="..."/>
          <div className="card-body">      
                <h5 className="card-title">{title == null ? "No title to Display" : title}</h5>
                <p className="card-text">{description? description : "No description to display"}</p>
                <p className="card-text"><small className="text-muted">By {author == null ? "Unknown Source" : author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary ">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
