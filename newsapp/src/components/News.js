import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    console.log("I am constructor");
    this.state = {
      articles: [], 
      loading: true, // Initial loading state
      page: 1,
      totalResults: 0, // Initialize totalResults
    };
  }

  async componentDidMount() {
    console.log("cdm");
    await this.fetchArticles();
  }

  fetchArticles = async () => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=010265762b7b401c95be4ad76feedd03&page=${this.props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({ 
        articles: parseData.articles,
        totalResults: parseData.totalResults,
        loading: false // Set loading to false after fetching data
      });
    } catch (error) {
      console.error("Error fetching the articles:", error);
      this.setState({ loading: false }); // Set loading to false even on error
    }
  }

  handlePrevClick = async () => {
    console.log("previous");
    this.setState({ page: this.state.page - 1, loading: true }, this.fetchArticles);
  };
  
  handleNextClick = async () => {
    console.log("next");
    
    // Check if next page exists
    const totalPages = Math.ceil(this.state.totalResults / 20);
    if (this.state.page < totalPages) {
      this.setState({ page: this.state.page + 1, loading: true }, this.fetchArticles);
    }
  };

  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h2>News Top Headlines</h2>

        {this.state.loading ? ( // Loading state
          <div>Loading...</div>
        ) : (
          <div className="row">
            {this.state.articles && this.state.articles.map((element) => {
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
        )}
        
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page >= Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
