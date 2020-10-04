import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';



// function App() {
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mode:"read",
      subject:{title:"Hey, I'm scuba!", sub:"I'm the head of Deep Wide Studio."},
      greeting:{title:"Greeting", desc:"Hello, guys! Hi, I'm Scuba Lee. I love to record all of my history and share with somebody else." },
      contents:[
      {id:1, title:"Scuba Lee", desc:"This is Deep Wide Studio."},
      {id:2, title:"Learning Journey", desc:"This is the history of Learning Journey."},
      {id:3, title:"Team Project", desc:"This is the history of Team Project."}
    ]
    }
  }
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'Greeting'){
      _title = this.state.greeting.title;
      _desc = this.state.greeting.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

  return (
    <div className="App">
     <Subject 
     title={this.state.subject.title} 
     sub={this.state.subject.sub}
     onChangePage={function(){
       this.setState({mode: 'Greeting'});
     }.bind(this)}
      >
     </Subject>
     {/* <header>
        <h1><a href="/" onClick={function(e){
          console.log(e);
          e.preventDefault();
          // this.state.mode = 'Greeting';
          this.setState({
            mode: 'Greeting'
          });
        }.bind(this)}>{this.state.subject.title}</a></h1>
        {this.state.subject.sub}
        </header> */}
     <TOC data={this.state.contents}></TOC>
     <Content title={_title} 
     desc={_desc}></Content>
    </div>
  );
}
}

export default App;
