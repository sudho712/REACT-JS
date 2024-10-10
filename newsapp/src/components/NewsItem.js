import React, { Component } from 'react';

class NewsItem extends Component {
  
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: '18rem' }}>
          {/* Use the imageUrl prop properly in the src attribute */}
          <img src={imageUrl} className="card-img-top" alt="News" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
