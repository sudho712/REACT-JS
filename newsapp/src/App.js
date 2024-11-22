import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Keep only one import statement
import Navbar from './components/Navbar';
import News from './components/News';
// If you have a NewsItem component, you can import it as well
import NewsItem from './components/NewsItem';

export default class App extends Component {
  render() {
    return (
      <div>
  <Router>
    <Navbar />
    <Routes> {/* Use Routes for route matching */}
      <Route path="/" element={<News key="general" pageSize={5} category="general" />} />
      <Route path="/sports" element={<News key="sports" pageSize={5} category="sports" />} />
      <Route path="/business" element={<News key="business" pageSize={5} category="business" />} />
      <Route path="/entertainment" element={<News key="entertainment" pageSize={5} category="entertainment" />} />
      <Route path="/health" element={<News key="health" pageSize={5} category="health" />} />
      <Route path="/science" element={<News key="science" pageSize={5} category="science" />} />
      <Route path="/technology" element={<News key="technology" pageSize={5} category="technology" />} />
      <Route path="/about" element={<div key="about">Your About component here, if you have one</div>} />
    </Routes>
  </Router>
</div>

    );
  }
}
