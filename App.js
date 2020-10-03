import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content'
import Subject from './components/Subject'
import './App.css';



// function App() {
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      subject:{title:"Hey, I'm scuba!", sub:"I'm the head of Deep Wide Studio."},
      content:{title:"Welcome", desc:"Hi, I'm Scuba Lee. I love to record all of my history and share with somebody else."}
    }
  }
  render() {
  return (
    <div className="App">
     <Subject title={this.state.subject.title} 
     sub={this.state.subject.sub}></Subject>
     <TOC></TOC>
     <Content title={this.state.content.title} 
     desc={this.state.content.desc}></Content>
    </div>
  );
}
}

export default App;
