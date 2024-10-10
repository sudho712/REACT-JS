import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor()
  {
    super();
    console.log("I am constrictor")
    this.state={
      articles: this.articles,
      loading: false
    }
  }
  render() {
    
    return (
      <div className="container my-3">
        <h2>News Top Headlines</h2>
     
        <div className="row">
        {this.state.articles.map((element)=>{
          return 
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" imageUrl="" newsUrl=""></NewsItem>                
          </div>        
 
        }

        )}
          

          
        </div>
        
      </div>
    )
  }
}

export default News
