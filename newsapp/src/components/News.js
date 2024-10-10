import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = {
    status: "ok",
    totalResults: 1001,
    articles: []
     
  };

  constructor() {
    super();
    console.log("I am constructor");
    this.state = {
      articles: [], // Accessing articles array inside the object
      loading: false
    };
  }

   async componentDidMount()
  {
    console.log("cdm")
    let url=""; //add your news api to fetch news
    let data= await fetch(url);
    let parseData = await data.json()    
    console.log(parseData);
    this.setState({articles: parseData.articles})

  }
  render() {
    console.log("rander")
    return (
      <div className="container my-3">
        <h2>News Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : "No Title Available"}
                  description={element.description ? element.description.slice(0, 88) : "No Description Available"}
                  imageUrl={element.urlToImage ? element.urlToImage : "https://via.placeholder.com/150"}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
