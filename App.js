import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content'
import Subject from './components/Subject'
import './App.css';




// function App() {
class App extends Component {
  render() {
  return (
    <div className="App">
     <Subject title="Hey, I'm scuba!" sub="I'm the head of Deep Wide Studio."></Subject>
     <Subject title="Record" sub="Recording is one of the main keywords that I have."></Subject>
    
     <TOC></TOC>
     <Content title="Welcome" desc="Hi, I'm Scuba Lee. I love to record all of my history and share with somebody else."></Content>
    </div>
  );
}
}

export default App;
