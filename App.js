import React, { Component } from 'react';

import './App.css';

class Subject extends Component{
  render(){
    return (
      <header>
      <h1>Hey, I'm scuba!</h1>
      </header>
    );
  }
}

class TOC extends Component{
  render(){
    return (
      <nav>
      <ul>
          <li><a hre="1.html"></a>Welcome</li>
          <li><a hre="2.html"></a>Learning Journey</li>
          <li><a hre="3.html"></a>Team Project</li>
      </ul>
  </nav>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <article>
      <h2>Welcome</h2> 
      Hi, I'm Scuba Lee. I love to record all of my history and share with somebody else. 
    </article>
    )
  }
}

// function App() {
class App extends Component {
  render() {
  return (
    <div className="App">
     <Subject></Subject>
     <TOC></TOC>
     <Content></Content>
    </div>
  );
}
}

export default App;
