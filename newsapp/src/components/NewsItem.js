import React, { Component } from 'react';

class NewsItem extends Component {
  render() {
    let {title, description}= this.props;
    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="https://via.placeholder.com/150" className="card-img-top" alt="News" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
