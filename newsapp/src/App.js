
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItem from './components/NewsItem';

export default class App extends Component {
  /* c='Sri'; */
  render() {

    return (
      <div>
        <Navbar></Navbar>
        <News pageSize={5}></News>
        {/* <NewsItem></NewsItem> */}
      </div>
    )
  }
}
