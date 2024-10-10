import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = {
    "status": "ok",
    "totalResults": 1001,
    "articles": [
      {
        "source": { "id": null, "name": "Gizmodo.com" },
        "author": "Gizmodo Deals",
        "title": "One Day After Prime Day, Amazon Crushes iPad Prices by 40%",
        "description": "A 40% reduction on an Apple product is historic.",
        "url": "https://gizmodo.com/amazon-crushes-ipad-prices-by-40-hitting-apple-hard-prime-day-2000509556",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/09/ipad-9th.jpg",
        "publishedAt": "2024-10-10T12:24:51Z",
        "content": "The 9th generation iPad is originally priced at $329 is now available for an astounding $199. This is a massive 40% discount which brings the price of this versatile tablet to its lowest point ever."
      },
      {
        "source": { "id": null, "name": "Gizmodo.com" },
        "author": "Gizmodo Deals",
        "title": "Prime Day: Amazon is Not Done Yet, Here Are the 10 Best Deals for This Thursday",
        "description": "Amazon aims to capitalize on the Prime Day momentum by continuing to provide substantial discounts across a wide range of products in its inventory.",
        "url": "https://gizmodo.com/prime-day-amazon-is-not-done-yet-here-are-the-10-best-deals-for-this-thursday-2000510289",
        "urlToImage": "https://gizmodo.com/app/uploads/2024/10/prime-day-amazon-october-24.jpg",
        "publishedAt": "2024-10-10T12:36:45Z",
        "content": "As the dust settles on Amazon’s Prime Day event, shoppers are discovering that the deals aren’t over just yet. While the official event has concluded, a treasure trove of discounts remains."
      },
      {
        "source": { "id": null, "name": "Android Central" },
        "author": "Jay Bonggolto",
        "title": "Chromebooks' Windows compatibility could be on the chopping block",
        "description": "Parallels Desktop, the Windows bridge for Chromebooks, might be going away.",
        "url": "https://www.androidcentral.com/chromebooks-laptops/chromebooks-windows-compatibility-could-be-on-the-chopping-block",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/MdoNgxcvfqxVQTmJpezkK-1200-80.jpg",
        "publishedAt": "2024-10-10T06:06:57Z",
        "content": "Parallels for ChromeOS, which lets Chromebooks run Windows apps, might soon be shutting down."
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

  render() {
    return (
      <div className="container my-3">
  <h2>News Top Headlines</h2>

  <div className="row">
    {this.state.articles.map((element) => {
      return (
        <div className="col-md-4" key={element.url}>
          <NewsItem
            title={element.title ? element.title.slice(0, 45) : "mytitle"}
            description={element.description ? element.description.slice(0, 88) : "mydesc"}
            imageUrl={element.urlToImage ? element.urlToImage : ""}
            newsUrl={element.url ? element.url : ""}
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
