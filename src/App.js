import React, { Component } from 'react';
import './App.css';
import Child from './components/parentToChild/child';
import Child2 from './components/parentToChild/child2';

class App extends Component {
  state = {
    title: 'placeholder title'
  }
  changeTheWorld = (newTitle) =>{
    this.setState({title:newTitle})
  }
  render() {
    return (
      <div className="App">
      <Child doWhatever= {this.changeTheWorld.bind(this, 'crazy world ')} title={this.state.title}/>
      <Child2 doWhateverElse= {this.changeTheWorld.bind(this, 'crazy world 2')} title={this.state.title}/>

      </div>
    );
  }
}

export default App;
