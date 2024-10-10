import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = {
    status: "ok",
    totalResults: 1001,
    articles: [
      {
        source: { id: null, name: "Gizmodo.com" },
        author: "Gizmodo Deals",
        title: "One Day After Prime Day, Amazon Crushes iPad Prices by 40%",
        description: "A 40% reduction on an Apple product is historic.",
        url: "https://gizmodo.com/amazon-crushes-ipad-prices-by-40-hitting-apple-hard-prime-day-2000509556",
        urlToImage: "https://gizmodo.com/app/uploads/2024/09/ipad-9th.jpg",
        publishedAt: "2024-10-10T12:24:51Z",
        content: "The 9th generation iPad is originally priced at $329 is now available for an astounding $199. This is a massive 40% discount which brings the price of this versatile tablet to its lowest point ever."
      },     
      {
        source: { id: null, name: "Android Central" },
        author: "Jay Bonggolto",
        title: "Chromebooks' Windows compatibility could be on the chopping block",
        description: "Parallels Desktop, the Windows bridge for Chromebooks, might be going away.",
        url: "https://www.androidcentral.com/chromebooks-laptops/chromebooks-windows-compatibility-could-be-on-the-chopping-block",
        urlToImage: "https://cdn.mos.cms.futurecdn.net/MdoNgxcvfqxVQTmJpezkK-1200-80.jpg",
        publishedAt: "2024-10-10T06:06:57Z",
        content: "Parallels for ChromeOS, which lets Chromebooks run Windows apps, might soon be shutting down."
      }
    ]
  };

  constructor() {
    super();
    console.log("I am constructor");
    this.state = {
      articles: this.articles.articles, // Accessing articles array inside the object
      loading: false
    };
  }

   async componentDidMount()
  {
    console.log("cdm")
    let url=""; // write yor api key fetch news  
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
