import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        This is news Component of project
        <NewsItem title="mytytle" description="mydesc"></NewsItem>
      </div>
    )
  }
}

export default News
